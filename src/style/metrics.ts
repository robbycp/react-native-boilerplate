import {Dimensions} from 'react-native';

export default {
  deviceHeight: Dimensions.get('screen').height,
  deviceWidth: Dimensions.get('screen').width,
  windowHeight: Dimensions.get('window').height,
  windowWidth: Dimensions.get('window').width,
};
