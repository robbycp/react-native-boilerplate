# react-native-boilerplate
Production-ready react native boilerplate. This repo is still under active development. We're improving this repo by build production released apps.

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

# Prerequisite
- Follow official setup basic development environment from react native for ios and android [here](https://reactnative.dev/docs/environment-setup)
- Install fastlane

# Guide
## Folder
- */.github*
  - All github configuration for workflows and pull request template
- */e2e*
  - End to end testing setup and configuration
- */script*
  - */github*
    - All script used by github workflows
  - All script used to build staging / production apk and release to code push
- */src*
  - */assets* put all animation, sound, image, video asset here. Try to make all assets in uri instead of put it here.
  - */components* put all global component here
    - */basic* here is all component view and the logic here. The basic one without accessing redux
    - */custom* . Here is some extendable custom component, using component basic or not. Could have redux state here
  - */hooks* put custom hooks here
  - */navigation* put all navigator configuration here
  - */screens* put all screens here, even the screen inside the BottomNavigator or TabNavigator, should be put in line in folder screens. One folder here represent one screen, and child folder represent local component
  - */services* all sdk integration to third party apps should be put in this folder. Connection to internal service, also could be put here, such us creating api class for one api host.
  - */store* config redux, with sagas and action reducer (slice)
  - */style* definition of theme such us spacing, color, layout, and other common styling variable should be put here.
  - */types* global type to be used anywhere in the folder
  - */utils* function helper like string formatter, error handler, clipboard.
- */storybook*
  - Storybook setup and configuration
## Development
![Development process](./docs/development-process.png)
### Caveats
- Use codepush to publish
  - update hotfix / patch
  - breaking change API or update major without any additional minor feature. New request or response payload form API for example.
- Publish using app store
  - new feature added or update minor
  - upgrade package or install new package
  - change / add native code
  - soft update
    - by default, update type is flexible
  - force update
- Label used as types of changes compared to version increment
  - fix, bug: patch
  - feature, modify, enhancement: minor
  - breaking: major
### Flow
1. Create feature / fix branch (dev branch) from branch `staging` with branch name prefix `feature/` or `fix/`
2. Develop in feature branch. Automated unit test will run every time developer want to make a push to origin. Commit couldn't be done if unit test is failed.
3. Create Pull Request(PR), fill template, and follow rules for title
  - Should have prefix: fix | modify | feature | breaking. Ex:
    - fix - image not showing
    - modify - remove screen product information detail
    - feature - youtube player in product information
    - breaking - modify api response v2/products
  - Should follow above format since it will break automated github action to determine next semantic version
4. Manual testing in dev branch
  a. build apk from branch feature and distribute to appcenter.
  ```
  // run with env staging
  yarn run dist:s-android
  // run with env production
  yarn run dist:s-android release
  ```
  b. QA engineer test the app
  c. QA passed and give label `QAPassed` in dev Pull Request.
5. Merged dev PR from branch `feature/` to branch `staging`. Note: only PR's that have been tested could be merged to branch staging.
6. If you want to develop other feature, repeat from step 1, but checkout from branch `staging`
7. When it's time to release, you could stop other engineer to merge new branch to branch `staging`.
8. Build staging and production env apk from branch `staging`
```
yarn run dist:s-android
yarn run dist:p-android
```
9. Merged PR from branch `staging` to `main`
10. Publish new release and tag
## Distribution
### App store / play store
Run this to bundle and upload to app store / playstore using fastlane.
```yarn run dist:android```
Included in this fastlane lane android
- Test file
- Submit to crashlytics
- Deploy to google play store
### Code push
```yarn run dist-codepush:s-android```
## Create BottomPanel
- If bottom panel is full screen, use react-navigation screenOptions presentation `modal`
- If not, use component BottomPanel
# How to clone
## Basic
1. Clone this repo, `git clone <this repo url> <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Change app name and Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name
  - run `npx react-native-rename "<app-name>" -b <id-application>`. Example `npx react-native-rename "siBudi" -b com.sibudi.sianto`
  - change folder name in android to match with <id-application>
5. Change app icon and splash icon. Use this https://appicon.co/ to generate icon to be copied in android and ios
- For android Copy to /android/app/src/main/res
- For iOS Copy to /ios/AppName/Images.xcassets/AppIcon.appiconset
- For iOS, change logo in LaunchScreen.storyboard
- For javascript, copy to src/assets/images/logo.png
6. Change src/assets/images/empty-image.png
7. Change fontFamily
  - copy font.ttf to src/assets/fonts.
  - In terminal `react-native link`
  - Change in src/style/fonts
8. Change Theme color
  - Change color in src/Theme/PaperTheme/index
  - Adjust src/Theme/Fonts as needed (lineHeight and fontSize)
  - Adjust src/Theme/Variables as needed (metric size)
9. Setting Deep link
  - Change prefixes in linking config in src/navigation/linking
  - Change AndroidManifest.xml with targeted scheme / domain
  - Change in Info.plist `CFBundleURLSchemes` `sibudi` value with targeted scheme / domain
10. Env
  - add value for file .env.staging and .env.production using .env-example template
11. in app update functionality
  - This functionality is requiring apps to be uploaded in play store. If this blocks your development, you can set WITH_APP_VERSION_CHECK to false in your .env . [Reference](https://stackoverflow.com/questions/60718191/in-app-update-gives-installexception-error-api-not-available)
12. Add git label in Pull Request (PR). It will be used for automated workflow.
  - `Type:Fix` : this PR fixing small / minor changes.
  - `Type:Feature` : this PR has new / modified features
  - `Type:Major` : this PR contain breaking changes. Ex: major refactor code, deprecated API response / request
  - `QAPassed` : when QA engineer already pass manual QA
  - `lockDeploy` : label for branch `release/` to stop other branch to be merged to branch `release/`

## One signal
1. Create account in firebase. Copy server key and sender id
2. Create account in one signal
3. Paste server id and key from firebase to one signal
4. Copy one signal id to env ONE_SIGNAL_ID

## Firebase
1. Create two firebase project: Staging and Production
2. Add android and ios apps to each of environment project
3. Follow [here](https://rnfirebase.io/) to add `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS) for firebase credentials

## Admob
1. Create admob account => create app
2. App Settings => copy to firebase.json

## Fastlane
- `fastlane supply init` to set up metadata management at a later point
### Android
- add json_key_file from google play console in /android/fastlane/Appfile

# Monitoring / Debugging
## React native debugger
- install react native debugger [here](https://github.com/jhen0409/react-native-debugger)
- use react native debugger to inspect
  - redux: state, dispatch action
  - react navigation: state, dispatch action
  - performance: using react dev tools to watch Profiler, see what components takes much rendering
## Flipper
- install [here](https://fbflipper.com/docs/getting-started/index)
- use this to monitor / debug
  - network: all network fetch including fetching data with third party sdk, or fetching image url, will be shown here
  - performance: metrics such us startup time
## react-native-performance-monitoring
- Use react-native-performance-monitoring package to debug render performance
- See more options and how to use [here](https://github.com/Flagsmith/react-native-performance-monitor)
- Use ScreenFlatListImage as playground
# Things for designer
## Colors
- define colors (customColor and defined color if needed) in src/style/color
## Spacing and Component
- defined spacing and component sizes must match with designer
## Font
- Add custom font if needed
- define in src/style/font
## Images
- Set Loading component (LoadingContent, LoadingOverlay) animation or using default Activiy Indicator.
- Logo for
  - app icon
  - icon in splash screen
  - launch screen for ios
- Empty state image logo. If something bad happen when image is loading

## Versioning
### Android
- With this step, will automatically upload sourcemap to sentry and codepush (with / without hermes, sentry.gradle already covered) since no custom versionName and versionCode generated by build gradle
#### Staging - staging build
- [fastlane] get `versionNpm` from npm package.json
```
versionNpm = load_json(json_path: "../package.json")["version"]
```
- [fastlane] get `branchName` from `versionNpm`
- [fastlane] get `versionName` from `branchName`. If release buildType, add `p-$versionName`
- [fastlane] run bump npm version prerelease
```
sh("npm", "version", "--preid", $versionName , "--no-git-tag-version")
```
- [fastlane] set custom versionName and versionCode => values will stay in int or string, not variable
  - if buildType release, add `p-$versionNpm` in versionName
```
# ios

match(...)
package = load_json(json_path: "../package.json")
increment_version_number(version_number: package["version"])
increment_build_number(build_number: ENV["CIRCLE_BUILD_NUM"] || 1)

# android

package = load_json(json_path: "../package.json")
gradle(
  task: "assembleRelease",
  properties: {
    'versionName' => package["version"] || "1.1",
    'versionCode' => ENV["CIRCLE_BUILD_NUM"] || 1
  }
)
```
- [fastlane] assembleStaging
- [gradle] upload sourcemap to sentry automatically by sentry.gradle since versionName and versionCode is in string programatically set by fastlane.
- [fastlane] upload appcenter using [plugin](https://github.com/microsoft/fastlane-plugin-appcenter)
#### Staging - release build
- [fastlane] set temporary custom versionName and versionCode 
- [fastlane] assembleRelease
- upload sourcemap to sentry automatically
- upload appcenter
- fastlane set previous custom versionName and versionCode
#### Release - prerelease build

