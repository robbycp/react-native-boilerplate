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
7. Change fontFamily in src/Assets/fonts.
  - In terminal `react-native link`
  - Change in src/Theme/PaperTheme/fonts
8. Change Theme color
  - Change color in src/Theme/PaperTheme/index
  - Adjust src/Theme/Fonts as needed (lineHeight and fontSize)
  - Adjust src/Theme/Variables as needed (metric size)

## One signal
1. Create account in firebase. Copy server key and sender id
2. Create account in one signal
3. Paste server id and key from firebase to one signal
4. Copy one signal id to env ONE_SIGNAL_ID

## Firebase
1. Create firebase project
2. Add apps to project
3. Follow [here](https://rnfirebase.io/) to add `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS) for firebase credentials

## Admob
1. Create admob account => create app
2. App Settings => copy to firebase.json

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