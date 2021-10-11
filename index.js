import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Config from 'react-native-config';

import {name as appName} from './app.json';

const AppUsed =
  Config.LOAD_STORYBOOK === 'true'
    ? require('./storybook').default
    : require('./src').default;

AppRegistry.registerComponent(appName, () => AppUsed);

if (__DEV__) {
  require('react-native-performance-flipper-reporter').setupDefaultFlipperReporter();
}
