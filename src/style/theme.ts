import {DefaultTheme} from 'react-native-paper';

import component from './component';
import customColor from './color';
import layout from './layout';
import metrics from './metrics';
import spacing from './spacing';

const customStyle = {
  component,
  layout,
  metrics,
  spacing,
};

const theme = {
  ...DefaultTheme,
  ...customStyle,
  colors: {
    ...customColor,
  },
};

export type CustomTheme = typeof customStyle;

export default theme;
