cd android && ./gradlew assembleStaging

appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file ./android/app/build/outputs/apk/staging/app-arm64-v8a-release.apk --group "Collaborators"