import React from 'react';
import {logPressHomeList} from '~/services/firebaseAnalytics';
import {getValue, RemoteConfigKeys} from '~/services/firebaseRemoteConfig';
import {ScreenName} from '~/types/navigation';
import {ListFeature, ScreenHomeContainerProps} from './ScreenHomeTypes';

import ScreenHomeView from './ScreenHomeView';

const ScreenHomeContainer: React.FunctionComponent<ScreenHomeContainerProps> =
  ({navigation}) => {
    const navigateAndAnalytics = (screenName: ScreenName) => {
      logPressHomeList();
      navigation.navigate(screenName);
    };
    const listFeatures: ListFeature[] = [
      {
        title: 'Webview',
        icon: 'google',
        onPress: () => navigateAndAnalytics(ScreenName.WEBVIEW_GOOGLE),
      },
    ];
    const textFirebaseConfig = getValue(RemoteConfigKeys.AWESOME_NEW_FEATURE);
    return (
      <ScreenHomeView
        {...{
          listFeatures,
          textFirebaseConfig,
        }}
      />
    );
  };

export default ScreenHomeContainer;
