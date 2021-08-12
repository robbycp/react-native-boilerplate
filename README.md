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

# How to clone
## Basic
1. Clone this repo, `git clone <this repo url> <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name `$ npx react-native-rename <newName>`
5. Change app icon and splach icon [here](https://thecodingmachine.github.io/react-native-boilerplate/docs/Configuration)
6. Change src/Assets/Images/image-error.png
7. Change fontFamily in src/Assets/fonts.
  - In terminal `react-native link`
  - Change in src/Theme/PaperTheme/fonts
8. Change Theme color
  - Change color in src/Theme/PaperTheme/index
  - Adjust src/Theme/Fonts as needed (lineHeight and fontSize)
  - Adjust src/Theme/Variables as needed (metric size)
9. Change app icon
  - Follow to change icon set [Here](https://aboutreact.com/react-native-change-app-icon/)
  - Use this website to generate app icon [here](https://appicon.co/)

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
## Things for designer
### Colors
- define colors (customColor and defined color if needed) in src/style/color
### Spacing and Component
- defined spacing and component sizes must match with designer
### Font
- Add custom font if needed
- define in src/style/font