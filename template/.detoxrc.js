const version = require('./package.json').version;

module.exports = {
  "testRunner": "jest",
  "runnerConfig": "e2e/config.json",
  "skipLegacyWorkersInjection": true,
  "devices": {
    "simulator": {
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 12 Pro Max"
      }
    },
    "emulator": {
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_2_API_29"
      }
    }
  },
  "apps": {
    "ios.release": {
      "type": "ios.app",
      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/BitriseRNDetox.app",
      "build": "export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -workspace ios/BitriseRNDetox.xcworkspace -scheme BitriseRNDetox  -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -quiet"
    },
    "ios.debug": {
      "type": "ios.app",
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/BitriseRNDetox.app",
      "build": "xcodebuild -workspace ios/BitriseRNDetox.xcworkspace -configuration Debug -scheme BitriseRNDetox -sdk iphonesimulator -derivedDataPath ios/build"
    },
    "android.debug": {
      "type": "android.apk",
      "binaryPath": `android/app/build/outputs/apk/debug/RNBoilerplate-${version}-universal-debug.apk`,
      "testBinaryPath": `android/app/build/outputs/apk/androidTest/debug/RNBoilerplate-${version}-debug-androidTest.apk`,
      "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd .."
    },
    "android.release": {
      "type": "android.apk",
      "binaryPath": `android/app/build/outputs/apk/release/RNBoilerplate-${version}-arm64-v8a-release.apk`,
      "build": "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd .."
    }
  },
  "configurations": {
    "ios.sim.debug": {
      "device": "simulator",
      "app": "ios.debug"
    },
    "ios.sim.release": {
      "device": "simulator",
      "app": "ios.release"
    },
    "android.emu.debug": {
      "device": "emulator",
      "app": "android.debug"
    },
    "android.emu.release": {
      "device": "emulator",
      "app": "android.release"
    }
  }
}