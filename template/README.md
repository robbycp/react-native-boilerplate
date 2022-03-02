# react-native-boilerplate
Production-ready react native boilerplate. This repo is still under active development. We're improving this repo by build production released apps.
# Prerequisite
- Follow official setup basic development environment from react native for ios and android [here](https://reactnative.dev/docs/environment-setup)
- Install fastlane

# Guide
## Getting Started
### Things for developer
- Setting Deep link
  - Change prefixes in linking config in src/navigation/linking
  - Change AndroidManifest.xml with targeted scheme / domain
  - Change in Info.plist `CFBundleURLSchemes` `sibudi` value with targeted scheme / domain
- Env
  - add value for file .env.staging and .env.production using .env-example template
- In app update functionality
  - This functionality is requiring apps to be uploaded in play store. If this blocks your development, you can set WITH_APP_VERSION_CHECK to false in your .env . [Reference](https://stackoverflow.com/questions/60718191/in-app-update-gives-installexception-error-api-not-available)
- (Optional) If you're using github to store your codebase, you could optionally make used of github workflows from this template. Add git label in repository Pull Request (PR) or Issues. It will be used for automated workflow for auto draft release version and pull request release.
  - `bug` : this PR should fixing bugs.
  - `enhancement` : this PR has new / modified features.
  - `breaking` : this PR has breaking changes. Ex: new api request or response.
  - `QAPassed` : when Quality Assurance has been passed
  - `dev` : PR related to bug, enhancement, breaking
  - `release` : PR from staging to main branch. It's collection of merged `bug`, `enhancement`, and `breaking` PR.
#### Using Firebase
1. Create two firebase project: Staging and Production
2. Add android and ios apps to each of environment project
3. Follow [here](https://rnfirebase.io/) to add `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS) for firebase credentials

#### Using One signal as Push Notification
1. Create account in firebase. Copy server key and sender id
2. Create account in one signal
3. Paste server id and key from firebase to one signal
4. Copy one signal id to env ONE_SIGNAL_ID

#### Fastlane
- `fastlane supply init` to set up metadata management at a later point
#### Android Play Store
- add json_key_file from google play console in /android/fastlane/Appfile
#### Update terms and condition
Here we use firebase firestore to store common data like terms and condition, privacy policy, stored with html tag, because we know that terms and condition, privacy policy is dynamic and sometimes need to change. So that explains why we user react-native-render-html and firebase/firestore.
### Things for designer
#### Colors
- define colors (customColor and defined color if needed) in src/style/color
- Change color in src/Theme/PaperTheme/index
  - Adjust src/Theme/Fonts as needed (lineHeight and fontSize)
  - Adjust src/Theme/Variables as needed (metric size)
#### Spacing and Component
- defined spacing and component sizes must match with designer
#### Font
- Add custom font if needed
  - copy font.ttf to src/assets/fonts.
  - In terminal `react-native link`
  - Change in src/style/fonts
#### Images
- Set Loading component (LoadingContent, LoadingOverlay) animation or using default Activiy Indicator.
- Change app icon and splash icon. Use this https://appicon.co/ to generate icon to be copied in android and ios
  - For android Copy to /android/app/src/main/res
  - For iOS Copy to /ios/AppName/Images.xcassets/AppIcon.appiconset
  - For iOS, change logo in LaunchScreen.storyboard
  - For javascript, copy to src/assets/images/logo.png
- Empty state image logo. If something bad happen or broken with image link.
  - Change src/assets/images/empty-image.png
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
    - */basic* here is all component view and the logic here. The basic one without accessing redux or global state.
    - */custom* . Here is some extendable custom component, using component basic or not. Could have global state from redux here
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
![Development process](docs/development_process.png?raw=true)
### Caveats
- Labels used as types of changes compared to version increment:
  - patch: fix, bug
  - minor: feature, modify, enhancement
  - major: breaking
### Flow
1. Create feature / fix branch (dev branch) from branch `staging` with branch name prefix `feature/` or `fix/`
2. Develop in feature branch. Automated unit test will run every time developer want to make a push to origin. Commit couldn't be done if unit test is failed.
3. Create Pull Request(PR), fill template, and follow rules for title
  - Should have prefix: fix | modify | feature | breaking. Ex:
    - fix - image not showing
    - modify - remove screen product information detail
    - feature - youtube player in product information
    - breaking - modify api response v2/products
  - If you choose to use github workflows, you should follow above format since it will break automated github workflows.
4. Manual testing in dev branch
  a. build apk from branch feature and distribute to appcenter.
  ```
  // run with env staging
  yarn run dist:s-android
  // run with env production if needed
  yarn run dist:s-android release
  ```
  b. QA engineer test the app
  c. QA passed and give label `QAPassed` in dev Pull Request.
5. Merged dev PR from branch `feature/` to branch `staging`. Note: only PR's that have been tested (has label QAPassed) could be merged to branch staging.
6. If you want to develop other feature, repeat from step 1.
7. When it's time to release, you could stop other engineer to merge new branch to branch `staging`.
8. Build staging and production env apk from branch `staging` and do testing.
```
yarn run dist:s-android
yarn run dist:p-android
```
9. QAPassed
10. Merged PR from branch `staging` to `main`
11. Publish new release and tag
## Distribution
### App store / play store
- Here are the reason if you want to publish using app store
  - new feature added or update minor
  - upgrade package or install new package
  - change / add native code
  - soft update
    - by default, update type is flexible
  - force update
- Run this to bundle and upload to app store / playstore using fastlane.
```yarn run dist:android```
### Code push
- Here are the reason if you use codepush to publish
  - update hotfix / patch
  - breaking change API or update major without any additional minor feature. New request or response payload form API for example.
- Run this command to publish from codepush
```yarn run dist-codepush:s-android```
## Create BottomPanel
- If bottom panel is full screen, use react-navigation screenOptions presentation `modal`
- If not, use component BottomPanel
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

# Fastlane
On progress step by step to implement fastlane
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
