import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

import {navigationRef} from '~/navigation/navigator';
import {RootStackParamList, ScreenName} from '~/types/navigation';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, ScreenName.SPLASH>;
}

const ScreenSplashView = ({navigation}: Props) => {
  const isReady = React.useRef(navigationRef.isReady());

  React.useEffect(() => {
    if (isReady) {
      navigation.replace(ScreenName.HOME);
    }
  }, [isReady, navigation]);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default ScreenSplashView;
