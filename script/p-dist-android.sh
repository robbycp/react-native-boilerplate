cd android && ./gradlew assembleRelease

uploadFileName=$(find ./app/build/outputs/apk/release/ -type f -iname "*arm64-v8a-release.apk")
echo "upload file to appcenter: $uploadFileName"

appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file "$uploadFileName" --group "Collaborators"