import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (__DEV__) {
  require('react-native-performance-flipper-reporter').setupDefaultFlipperReporter();
}
