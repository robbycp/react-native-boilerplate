import {LinkingOptions} from '@react-navigation/native';
import type {RootStackParamList} from '~/types/navigation';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['https://sibudi.id', 'sibudi://'],
  config: {
    initialRouteName: 'Splash',
    screens: {
      Form: 'form',
    },
  },
};

export default linking;
