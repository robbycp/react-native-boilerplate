import React from 'react';
import {Alert} from 'react-native';
import useFocus from '~/hooks/useFocus';

import {logPressHomeList} from '~/services/firebaseAnalytics';
import {setInAppMessaging} from '~/services/firebaseInAppMessaging';
import {getValue, RemoteConfigKeys} from '~/services/firebaseRemoteConfig';
import {ScreenName} from '~/types/navigation';
import {shareMessage} from '~/utils/shareLink';

import {ListFeature, ScreenHomeContainerProps} from './ScreenHomeTypes';
import ScreenHomeView from './ScreenHomeView';

const ScreenHomeContainer: React.FunctionComponent<ScreenHomeContainerProps> =
  ({navigation}) => {
    const [isShowFocus, setisShowFocus] = React.useState(false);
    const navigateAndAnalytics = (screenName: ScreenName) => {
      logPressHomeList();
      navigation.navigate(screenName);
    };
    const handleOnFocus = () => {
      Alert.alert('Focus', 'onFocus');
    };
    const handleOnBlur = () => {
      Alert.alert('Blur', 'onBlur');
    };
    useFocus({
      onFocus: isShowFocus ? handleOnFocus : undefined,
      onBlur: isShowFocus ? handleOnBlur : undefined,
    });
    const listFeatures: ListFeature[] = [
      {
        title: 'Ads List',
        icon: 'account-box',
        onPress: () => navigateAndAnalytics(ScreenName.ADS_LIST),
      },
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
        title: 'List Tabs',
        icon: 'image',
        onPress: () => navigateAndAnalytics(ScreenName.TABS),
      },
      {
        title: 'Webview',
        icon: 'google',
        onPress: () => navigateAndAnalytics(ScreenName.WEBVIEW_GOOGLE),
      },
      {
        title: 'Terms & Condition',
        icon: 'google',
        onPress: () => navigateAndAnalytics(ScreenName.TERMS_CONDITION),
      },
    ];
    const textFirebaseConfig = getValue(RemoteConfigKeys.AWESOME_NEW_FEATURE);
    const handleShareMessage = () => {
      shareMessage('Hello share is working');
    };
    React.useEffect(() => {
      setInAppMessaging(false);
    }, []);
    return (
      <ScreenHomeView
        {...{
          handleShareMessage,
          listFeatures,
          isShowFocus,
          navigation,
          setisShowFocus,
          textFirebaseConfig,
        }}
      />
    );
  };

export default ScreenHomeContainer;
