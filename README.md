# react-native-boilerplate

# Features
- One Signal Notification
- Firebase firestore
- Firebase auth : Google
- Firebase analytics
- Firebase remote config
- React Native Paper
- Webview
- Redux Saga
- React Native Share

# Global and Tools installed
1. Install fastlane
```
brew install fastlane
```
2. 

# Guide
## Folder
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
## BottomPanel
- If full screen bottom panel, use react-navigation screenOptions presentation `modal`
- If not, use component BottomPanel
##

# How to clone
## Basic
1. Clone this repo, `git clone <this repo url> <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Chane app name and Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name
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

## Build, Publish, versioning
### Caveats
- Publish using codepush
  - update hotfix / patch
  - breaking change API, update major. New request or response payload form API for example.
- Publish using app store
  - new feature added or update minor
  - upgrade package or install new package
  - soft update
    - by default, update type is flexible
  - force update
### Development flow
1. Create branch from branch `main` with branch name prefix `feature/`
2. Develop feature
3. Create PR to be merged to branch name prefix `release/`
4. Testing in feature branch
  a. build apk from branch feature and distribute to appcenter. If you want to build apk with environment production from branch feature, run second command
  ```
  // run with env staging
  yarn run dist:s-android
  // run with env production
  yarn run dist:s-android release
  ```
  b. tester test the app
  c. QA passed
5. Merged PR branch `feature/` to branch `release/`
6. If you want to develop other feature, repeat from step 1 but branched from branch `release`
7. Final testing to see any regression or not. Build staging and production env apk from branch `/release`
```
yarn run dist:s-android
yarn run dist:p-android
```
8. Merged PR from branch name prefix `release/` to `main`
9. Run bump version: hotfix / patch, minor, or major
```
yarn run bump-patch
yarn run bump-minor
yarn run bump-major
```
10. commit and push changes
### Distribution
#### Major and minor version
Run this to bundle and upload to app store / playstore using fastlane.
```yarn run dist:android```
Included in this fastlane lane android
- Test file
- Submit to crashlytics
- [TODO] Upload apps screenshot to description
- Deploy to google play store
#### Patch version
If patch version change in native code, you should run same like major and minor version. Otherwise, you could run this to upload bundleJS to appcenter codepush.
```yarn run dist-codepush:s-android```
### How to build and publish patch
1. git checkout to main branch
2. Run this to bump version in package.json. Choose based on what version you want to bump, `patch`, `minor`, or `major`. `yarn run bump-patch`
3. Run this to  `yarn run dist-codepush:s-android`

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