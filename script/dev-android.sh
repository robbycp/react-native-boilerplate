cd android && ./gradlew assembleRelease

appcenter distribute release --app kudaterbang-test/react-native-boilerplate-android --file ./app/build/outputs/bundle/release/app.aab --group "Collaborator"