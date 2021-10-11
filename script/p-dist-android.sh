# Update npm version
prereleaseTag="rc"
echo "bump prelease production version: $prereleaseTag"
npm version prerelease --preid $prereleaseTag --no-git-tag-version

# # Build apk
cd android && ./gradlew assembleRelease

# # Upload apk to appcenter
uploadFileName=$(find ./app/build/outputs/apk/release/ -type f -iname "*arm64-v8a-release.apk")
echo "upload file to appcenter: $uploadFileName"
appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file "$uploadFileName" --group "Collaborators"
echo "upload successfull"
