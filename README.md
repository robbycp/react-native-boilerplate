# react-native-boilerplate
This repo is still under active development please use carefully. Production-ready react native boilerplate. This repo is still under active development. We're improving this repo by build production released apps.

## Getting Started
To create new project, run this command
```
npx react-native init MyApp --template https://github.com/robbycp/react-native-boilerplate
```
# Roadmap
[ ] Fastlane to upload apps screenshot to play store / app store
[ ] Create react native template instead of git clone
# Features
- Typescript
- React Navigation
- Redux
  - Used for storing global state data
- Redux Saga
- React Native Paper
- React Query
  - Used for fetching one time used data
- One Signal for Push Notification
- Sentry
  - Tools for reporting crash, error, and app performance on ditributed app
- AppCenter
  - Distribute apk to QA / other engineer to be tested in staging or production environment if needed.
  - Codepush to distribute patch changes without having to download new apk
- Github Action
  - Create development workflow from developing, testing, until release
  - Increase versioning based on merged pull request
  - Make draft set of changes on release pull request, release, and tag
- App Tracking Transparency
  - All iOS app needs app tracking transparency to be released on app store. Documentation could be found [here](https://developer.apple.com/documentation/apptrackingtransparency)
- In app update
- Storybook
  - Show existing component to be reused
- Tools for performance tracking and debugging
- Testing
  - Unit test
  - E2E test with detox
- Linter
- Firebase firestore
- Firebase auth : Google
- Firebase analytics
- Firebase remote config
- Internationalization
- Webview
- React Native Share
