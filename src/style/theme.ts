import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  DefaultTheme as RNDefaultTheme,
  DarkTheme as RNDefaultDarkTheme,
} from '@react-navigation/native';

import component from './component';
import {darkColors, lightColors} from './color';
import fonts from './fonts';
import layout from './layout';
import metrics from './metrics';
import spacing from './spacing';

const customStyle = {
  component,
  fonts: configureFonts(fonts),
  layout,
  metrics,
  spacing,
};

export type CustomStyle = typeof customStyle;

export const RNLightTheme = {
  dark: false,
  colors: {
    ...RNDefaultTheme.colors,
    primary: lightColors.primary,
    background: lightColors.background,
    card: lightColors.surface,
    text: lightColors.text,
    notification: lightColors.notification,
  },
};

export const RNDarkTheme = {
  dark: true,
  colors: {
    ...RNDefaultDarkTheme.colors,
    primary: darkColors.primary,
    background: darkColors.background,
    card: darkColors.surface,
    text: darkColors.text,
    notification: darkColors.notification,
  },
};

export const lightTheme = {
  ...PaperDefaultTheme,
  ...customStyle,
  colors: {
    ...lightColors,
  },
};

export const darkTheme = {
  ...PaperDarkTheme,
  ...customStyle,
  colors: {
    ...darkColors,
  },
};
