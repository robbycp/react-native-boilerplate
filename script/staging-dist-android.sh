cd android && ./gradlew assembleRelease

appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file ./android/app/build/outputs/apk/release/app-arm64-v8a-release.apk --group "Collaborators"