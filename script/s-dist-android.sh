cd android && ./gradlew assembleStaging

uploadFileName=$(find ./app/build/outputs/apk/staging/ -type f -iname "*arm64-v8a-staging.apk")
echo "upload file to appcenter: $uploadFileName"

appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file "${uploadFileName}" --group "Collaborators"