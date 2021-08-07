import React from 'react';
import {logPressHomeList} from '~/services/firebaseAnalytics';
import {getValue, RemoteConfigKeys} from '~/services/firebaseRemoteConfig';
import {ScreenName} from '~/types/navigation';
import {shareMessage} from '~/utils/shareLink';
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
        title: 'Form',
        icon: 'account-box',
        onPress: () => navigateAndAnalytics(ScreenName.FORM),
      },
      {
        title: 'List Image',
        icon: 'image',
        onPress: () => navigateAndAnalytics(ScreenName.FLATLIST_IMAGE),
      },
      {
        title: 'Webview',
        icon: 'google',
        onPress: () => navigateAndAnalytics(ScreenName.WEBVIEW_GOOGLE),
      },
    ];
    const textFirebaseConfig = getValue(RemoteConfigKeys.AWESOME_NEW_FEATURE);
    const handleShareMessage = () => {
      shareMessage('Hello share is working');
    };
    return (
      <ScreenHomeView
        {...{
          handleShareMessage,
          listFeatures,
          textFirebaseConfig,
        }}
      />
    );
  };

export default ScreenHomeContainer;
