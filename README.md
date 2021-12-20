# react-native-boilerplate
Production-ready react native boilerplate. This repo is still under active development. We're improving this repo by build production released apps.

## Getting Started
To create new project, run this command
```
npx react-native init MyApp --template https://github.com/robbycp/react-native-boilerplate
```
# Roadmap
- [x] Create react native template instead of git clone
- [ ] Fastlane to upload apps screenshot to play store / app store
- [ ] Github workflows to stop development branch to be merged to staging branch
# Features
- Typescript
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Redux](https://redux.js.org/introduction/getting-started)
  - Used for storing global state data
  - Use redux toolkit to create slice action and help strongly type action reducer
- [Redux Saga](https://redux-saga.js.org/)
  - Used for creating chain of processes redux side effect
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Query](https://react-query.tanstack.com/overview)
  - Used for fetching one time used data. Example: fetching list of product, todo detail.
- [One Signal](https://documentation.onesignal.com/docs/react-native-sdk-setup)
  - Used for remote Push Notification
- [Sentry](https://docs.sentry.io/platforms/react-native/)
  - Tools for reporting crash, error, and app performance on ditributed apps
- [AppCenter](https://appcenter.ms/)
  - Distribute apk to QA / other engineer to be tested in staging or production environment if needed.
  - Codepush to distribute patch changes without having to download new apk
- [Github Action](https://docs.github.com/en/actions)
  - Create development workflow from developing, testing, until release
  - Versioning based on merged pull request
  - Make draft set of changes on pull request release, release, and tag
- [App Tracking Transparency](https://github.com/mrousavy/react-native-tracking-transparency)
  - All iOS app needs app tracking transparency to be released on app store. Documentation could be found [here](https://developer.apple.com/documentation/apptrackingtransparency)
- [In app update](https://github.com/SudoPlz/sp-react-native-in-app-updates)
  - Show if there is any new version
- [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/)
  - Show existing component to be reused
- Tools for performance tracking and debugging
  - [react-native-performance](https://github.com/oblador/react-native-performance)
  - [react-native-performance-flipper-reporter](https://github.com/oblador/react-native-performance/blob/master/packages/react-native-performance-flipper-reporter/README.md)
  - [react-native-performance-monitor](https://github.com/Flagsmith/react-native-performance-monitor)
    - Easily compare performance changes when you change your code
- Testing
  - Unit test
  - E2E test with detox
- Linter
- [Firebase firestore](https://rnfirebase.io/firestore/usage)
  - Generally to store common data such as Privacy Policy, Terms and Conditions. If you already have website to store, you can remove from your code.
- [Firebase auth](https://rnfirebase.io/auth/usage)
  - In this repo, i use Google authentication
  - If you already have your authentication system, you can remove from your code
- [Firebase analytics](https://rnfirebase.io/analytics/usage)
- [Firebase remote config](https://rnfirebase.io/remote-config/usage)
  - Trust me in any type of apps, this feature is a life saver. In this case we use it to tell user to update version, soft update or force update.
- [Internationalization using react-i18next](https://react.i18next.com/)
- [Webview](https://github.com/react-native-webview/react-native-webview)
- [React Native Share](https://github.com/react-native-share/react-native-share)
- [Lottie](https://github.com/lottie-react-native/lottie-react-native)
  - Used to show animation design
- Better versioning for repository and apk build from development until release.
