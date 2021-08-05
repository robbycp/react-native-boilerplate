import {DefaultTheme} from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  card: {
    borderRadius: 8,
    elevation: 4,
  },
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default theme;
