cd android && ./gradlew bundleRelease

appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file ./android/app/build/outputs/bundle/release/app.aab --group "Collaborators"