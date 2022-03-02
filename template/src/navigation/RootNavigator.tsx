import React from 'react';
import {Platform} from 'react-native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

import ScreenCollapsibleBackground from '~/screens/CollapsibleBackground';
import ScreenCollapsibleDefault from '~/screens/CollapsibleDefault';
import ScreenCollapsibleSticky from '~/screens/CollapsibleSticky';
import ScreenCollapsibleSubHeader from '~/screens/CollapsibleSubHeader';
import ScreenFetchApi from '~/screens/FetchApi';
import ScreenFlatListImage from '~/screens/FlatListImage';
import ScreenForm from '~/screens/Form';
import ScreenHome from '~/screens/Home';
import ScreenModalPrivacy from '~/screens/ModalPrivacy';
import ScreenTabExample from '~/screens/TabExample';
import ScreenSplash from '~/screens/Splash';
import ScreenWebviewGoogle from '~/screens/WebviewGoogle';
import ScreenTermsCondition from '~/screens/T&C';
import Header from '~/components/basic/Header/Header';

import type {RootStackParamList} from '~/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Group
        screenOptions={{
          ...(Platform.OS === 'android'
            ? TransitionPresets.FadeFromBottomAndroid
            : TransitionPresets.DefaultTransition),
          header: ({route}) => {
            return <Header title={route.name} />;
          },
        }}>
        <Stack.Screen
          name="Collapsible Background"
          component={ScreenCollapsibleBackground}
        />
        <Stack.Screen
          name="Collapsible Default"
          component={ScreenCollapsibleDefault}
        />
        <Stack.Screen
          name="Collapsible Sticky"
          component={ScreenCollapsibleSticky}
        />
        <Stack.Screen
          name="Collapsible Subheader"
          component={ScreenCollapsibleSubHeader}
        />
        <Stack.Screen name="Fetch Api" component={ScreenFetchApi} />
        <Stack.Screen name="FlatList Image" component={ScreenFlatListImage} />
        <Stack.Screen name="Form" component={ScreenForm} />
        <Stack.Screen
          name="Home"
          component={ScreenHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={ScreenSplash}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Tabs" component={ScreenTabExample} />
        <Stack.Screen name="Terms Condition" component={ScreenTermsCondition} />
        <Stack.Screen name="Webview Google" component={ScreenWebviewGoogle} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          header: ({route}) => {
            return (
              <Header
                title={route.name}
                withBackButton={Platform.OS === 'android'}
              />
            );
          },
        }}>
        <Stack.Screen name="Modal Privacy" component={ScreenModalPrivacy} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
