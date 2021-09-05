cd android && ./gradlew assembleRelease

VersionName=`node -p "require('../package.json').version"`
BranchName=$(git rev-parse --abbrev-ref HEAD)
BranchNameParsed=${BranchName/\//-}

appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file "./app/build/outputs/apk/release/RNBoilerplate-${VersionName}-${BranchNameParsed}-arm64-v8a-release.apk" --group "Collaborators"