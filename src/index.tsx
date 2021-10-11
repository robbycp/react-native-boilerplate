import React, {Profiler} from 'react';
import codePush from 'react-native-code-push';
import * as Sentry from '@sentry/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider, useDispatch, useSelector} from 'react-redux';
import {
  Provider as PaperProvider,
  Snackbar,
  useTheme,
} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import ExceptionHandler from 'react-native-exception-handler';
import {StatusBar, useColorScheme} from 'react-native';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';

import RootNavigator from '~/navigation/RootNavigator';
import {navigationRef} from '~/navigation/navigator';
import configureStore from '~/store';
import {RNDarkTheme, RNLightTheme, darkTheme, lightTheme} from '~/style/theme';
import {
  exceptionJSHandler,
  exceptionNativeHandler,
  routingInstrumentation,
} from '~/utils/errorHandler';
import {fetchRemoteConfig} from '~/services/firebaseRemoteConfig';
import {initialAnalytics, logScreen} from '~/services/firebaseAnalytics';
import {setInAppMessaging} from '~/services/firebaseInAppMessaging';
import initOneSignal from '~/services/notificationOneSignal';
import {appNavigationReady} from '~/store/slices/app';
import {getSnackbarState, snackbarHide} from '~/store/slices/snackbar';
import linking from '~/navigation/linking';
import {
  setResourceLogging,
  traceRender,
  usePerformance,
} from '~/utils/performance';
import '~/translations';

setResourceLogging();

const {persistor, store} = configureStore();

const allowInDevMode = false;

setInAppMessaging(true);

initOneSignal();

ExceptionHandler.setJSExceptionHandler(exceptionJSHandler, allowInDevMode);
ExceptionHandler.setNativeExceptionHandler(
  exceptionNativeHandler,
  allowInDevMode,
);

fetchRemoteConfig();

initialAnalytics();

const AppSnackbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const scheme = useColorScheme();
  const routeNameRef = React.useRef<string | undefined>('');
  const snackbar = useSelector(getSnackbarState);
  const onDismissSnackBar = () => dispatch(snackbarHide());

  let backgroundColor = null;
  if (snackbar.type === 'error') {
    backgroundColor = theme.colors.error;
  } else if (snackbar.type === 'success') {
    backgroundColor = theme.colors.custom.green400;
  }
  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <SafeAreaProvider>
        <NavigationContainer
          linking={linking}
          theme={scheme === 'dark' ? RNDarkTheme : RNLightTheme}
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current = navigationRef.getCurrentRoute()?.name;
            routingInstrumentation.registerNavigationContainer(navigationRef);
            dispatch(appNavigationReady());
          }}
          onStateChange={() => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName = navigationRef.getCurrentRoute()?.name;

            if (previousRouteName !== currentRouteName) {
              logScreen(currentRouteName);
            }
            routeNameRef.current = currentRouteName;
          }}>
          <StatusBar barStyle="dark-content" />
          <RootNavigator />
          <Snackbar
            visible={snackbar.isVisible}
            onDismiss={onDismissSnackBar}
            duration={snackbar.duration}
            style={backgroundColor ? {backgroundColor} : {}}
            action={{
              label: snackbar.textButton,
              onPress: onDismissSnackBar,
            }}>
            {snackbar.message}
          </Snackbar>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const App = () => {
  useReduxDevToolsExtension(navigationRef);
  usePerformance();
  return (
    <Profiler id="App.render()" onRender={traceRender}>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppSnackbar />
        </PersistGate>
      </StoreProvider>
    </Profiler>
  );
};

export default Sentry.wrap(codePush(App));
