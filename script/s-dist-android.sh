cd android && ./gradlew assembleStaging

VersionName=`node -p "require('../package.json').version"`
BranchName=$(git rev-parse --abbrev-ref HEAD)
BranchNameParsed=${BranchName/\//-}

appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file "./app/build/outputs/apk/staging/RNBoilerplate-${VersionName}-${BranchNameParsed}-arm64-v8a-staging.apk" --group "Collaborators"