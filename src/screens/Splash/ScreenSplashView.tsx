import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
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
  const isReady = useSelector(state => state.app.isNavigationReady);
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
        testID="splashImageLogo"
      />
    </View>
  );
};

export default ScreenSplashView;
