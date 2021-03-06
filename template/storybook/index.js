// if you use expo remove this line
import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

import {loadStories} from './storyLoader';
import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  host: '0.0.0.0',
  port: '7007',
  asyncStorage: require('@react-native-async-storage/async-storage').default,
});

export default StorybookUIRoot;
