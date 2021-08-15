import React from 'react';
import {View, Text} from 'react-native';

import {navigationRef} from '~/navigation/navigator';
import {useDispatch} from 'react-redux';
import {appStartCheck} from '~/store/slices/app';
import {useTheme} from 'react-native-paper';

const ScreenSplashView = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isReady = React.useRef(navigationRef.isReady());

  React.useEffect(() => {
    if (isReady) {
      dispatch(appStartCheck());
    }
  }, [isReady, dispatch]);

  return (
    <View style={[theme.layout.center, theme.layout.fill]}>
      <Text>Splash</Text>
    </View>
  );
};

export default ScreenSplashView;
