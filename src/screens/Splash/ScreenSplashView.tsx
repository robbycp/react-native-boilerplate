import React from 'react';
import {View, Text} from 'react-native';

import {navigationRef} from '~/navigation/navigator';
import {useDispatch} from 'react-redux';
import {appStartCheck} from '~/store/slices/app';

// interface Props {
//   navigation: NativeStackNavigationProp<RootStackParamList, ScreenName.SPLASH>;
// }

const ScreenSplashView = () => {
  const dispatch = useDispatch();
  const isReady = React.useRef(navigationRef.isReady());

  React.useEffect(() => {
    if (isReady) {
      dispatch(appStartCheck());
    }
  }, [isReady, dispatch]);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default ScreenSplashView;
