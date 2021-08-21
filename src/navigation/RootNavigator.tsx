import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenAdsList from '~/screens/AdsList';
import ScreenCollapsibleBackground from '~/screens/CollapsibleBackground';
import ScreenCollapsibleCustomHeader from '~/screens/CollapsibleCustomHeader';
import ScreenCollapsibleDefault from '~/screens/CollapsibleDefault';
import ScreenCollapsibleSticky from '~/screens/CollapsibleSticky';
import ScreenCollapsibleSubHeader from '~/screens/CollapsibleSubHeader';
import ScreenFlatListImage from '~/screens/FlatListImage';
import ScreenForm from '~/screens/Form';
import ScreenHome from '~/screens/Home';
import ScreenModalPrivacy from '~/screens/ModalPrivacy';
import ScreenTabExample from '~/screens/TabExample';
import ScreenSplash from '~/screens/Splash';
import ScreenWebviewGoogle from '~/screens/WebviewGoogle';
import {RootStackParamList, ScreenName} from '~/types/navigation';
import ScreenTermsCondition from '~/screens/T&C';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.SPLASH}>
      <Stack.Screen name={ScreenName.ADS_LIST} component={ScreenAdsList} />
      <Stack.Screen
        name={ScreenName.COLLAPSIBLE_BACKGROUND}
        component={ScreenCollapsibleBackground}
      />
      <Stack.Screen
        name={ScreenName.COLLAPSIBLE_CUSTOM}
        component={ScreenCollapsibleCustomHeader}
      />
      <Stack.Screen
        name={ScreenName.COLLAPSIBLE_DEFAULT}
        component={ScreenCollapsibleDefault}
      />
      <Stack.Screen
        name={ScreenName.COLLAPSIBLE_STICKY}
        component={ScreenCollapsibleSticky}
      />
      <Stack.Screen
        name={ScreenName.COLLAPSIBLE_SUBHEADER}
        component={ScreenCollapsibleSubHeader}
      />
      <Stack.Screen
        name={ScreenName.FLATLIST_IMAGE}
        component={ScreenFlatListImage}
      />
      <Stack.Screen name={ScreenName.FORM} component={ScreenForm} />
      <Stack.Screen
        name={ScreenName.HOME}
        component={ScreenHome}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ScreenName.SPLASH} component={ScreenSplash} />
      <Stack.Screen name={ScreenName.TABS} component={ScreenTabExample} />
      <Stack.Screen
        name={ScreenName.TERMS_CONDITION}
        component={ScreenTermsCondition}
      />
      <Stack.Screen
        name={ScreenName.WEBVIEW_GOOGLE}
        component={ScreenWebviewGoogle}
      />
      <Stack.Screen
        name={ScreenName.MODAL_PRIVACY}
        component={ScreenModalPrivacy}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
