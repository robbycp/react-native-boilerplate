import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {navigationRef} from '~/navigation/navigator';
import {useDispatch} from 'react-redux';
import {appStartCheck} from '~/store/slices/app';
import {useTheme} from 'react-native-paper';

const styles = StyleSheet.create({
  image: {
    borderRadius: 16,
    height: 100,
    width: 100,
  },
});

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
      <Image
        source={require('~/assets/images/logo.png')}
        style={styles.image}
      />
    </View>
  );
};

export default ScreenSplashView;
