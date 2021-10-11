import {LinkingOptions} from '@react-navigation/native';
import {RootStackParamList, ScreenName} from '~/types/navigation';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['https://sibudi.id', 'sibudi://'],
  config: {
    initialRouteName: ScreenName.SPLASH,
    screens: {
      [ScreenName.ADS_LIST]: 'ads',
    },
  },
};

export default linking;
