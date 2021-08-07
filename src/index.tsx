import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

import RootNavigator from '~/navigation/RootNavigator';
import {navigationRef} from '~/navigation/navigator';
import configureStore from '~/store';
import theme from '~/style/theme';
import {exceptionJSHandler, exceptionNativeHandler} from '~/utils/errorHandler';
import {fetchRemoteConfig} from '~/services/firebaseRemoteConfig';
import {initialAnalytics, logScreen} from '~/services/firebaseAnalytics';

const {persistor, store} = configureStore();

const allowInDevMode = true;

setJSExceptionHandler(exceptionJSHandler, allowInDevMode);
setNativeExceptionHandler(exceptionNativeHandler, allowInDevMode);

fetchRemoteConfig();

initialAnalytics();

const App = () => {
  const routeNameRef = React.useRef<string | undefined>('');
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <NavigationContainer
              ref={navigationRef}
              onReady={() => {
                routeNameRef.current =
                  navigationRef.current?.getCurrentRoute()?.name;
              }}
              onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName =
                  navigationRef.current?.getCurrentRoute()?.name;

                if (previousRouteName !== currentRouteName) {
                  logScreen(currentRouteName);
                }
                routeNameRef.current = currentRouteName;
              }}>
              <RootNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
