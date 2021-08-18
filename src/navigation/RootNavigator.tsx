import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenAdsList from '~/screens/AdsList';
import ScreenFlatListImage from '~/screens/FlatListImage';
import ScreenForm from '~/screens/Form';
import ScreenHome from '~/screens/Home';
import ScreenModalPrivacy from '~/screens/ModalPrivacy';
import ScreenSplash from '~/screens/Splash';
import ScreenWebviewGoogle from '~/screens/WebviewGoogle';
import {RootStackParamList, ScreenName} from '~/types/navigation';
import ScreenTermsCondition from '~/screens/T&C';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenName.SPLASH}
      screenOptions={{headerShown: false}}>
      <Stack.Group screenOptions={{animation: 'slide_from_right'}}>
        <Stack.Screen name={ScreenName.ADS_LIST} component={ScreenAdsList} />
        <Stack.Screen
          name={ScreenName.FLATLIST_IMAGE}
          component={ScreenFlatListImage}
        />
        <Stack.Screen name={ScreenName.FORM} component={ScreenForm} />
        <Stack.Screen name={ScreenName.HOME} component={ScreenHome} />
        <Stack.Screen name={ScreenName.SPLASH} component={ScreenSplash} />
        <Stack.Screen
          name={ScreenName.TERMS_CONDITION}
          component={ScreenTermsCondition}
        />
        <Stack.Screen
          name={ScreenName.WEBVIEW_GOOGLE}
          component={ScreenWebviewGoogle}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: Platform.OS === 'ios' ? 'modal' : 'containedModal',
        }}>
        <Stack.Screen
          name={ScreenName.MODAL_PRIVACY}
          component={ScreenModalPrivacy}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
