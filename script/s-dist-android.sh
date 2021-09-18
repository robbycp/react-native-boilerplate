echo "command $1"
buildType="stagingRelease"

# Get last version
lastVersion=""

if [ "$1" = "release" ]; then
  buildType="$1"
  lastVersion=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
  echo "lastVersion: $lastVersion"
fi

# Update npm version
branchName=$(git rev-parse --abbrev-ref HEAD)
branchNameClean=${branchName////-}
versionName=$branchNameClean

if [ "$buildType" = "release" ]; then
  versionName="p-$versionName"
fi

echo "bump prelease staging version: $versionName"
if [ "$buildType" = "release" ]; then
  npm version prerelease --preid $versionName --no-git-tag-version
else
  npm version prerelease --preid $versionName
fi

# # Build apk
cd android && ./gradlew assembleStagingRelease

# # Upload apk to appcenter
uploadFileName=$(find ./app/build/outputs/apk/$buildType/ -type f -iname "*arm64-v8a-stagingRelease.apk")
echo "upload file to appcenter: $uploadFileName"
appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file "${uploadFileName}" --group "Collaborators"
echo "upload successfull"

# revert npm version for release
if [ "$buildType" = "release" ]; then
  npm version $lastVersion --no-git-tag-version
  echo "revert prelease staging version: $lastVersion"
fi