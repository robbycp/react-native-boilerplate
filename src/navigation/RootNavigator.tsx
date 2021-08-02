import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenHome from '~/screens/Home';
import ScreenSplash from '~/screens/Splash';
import {RootStackParamList, ScreenName} from '~/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.SPLASH}>
      <Stack.Screen name={ScreenName.HOME} component={ScreenHome} />
      <Stack.Screen name={ScreenName.SPLASH} component={ScreenSplash} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
