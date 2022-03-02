import React from 'react';
import {Linking} from 'react-native';
import {Alert} from 'react-native';
import useFocus from '~/hooks/useFocus';

import {logPressHomeList} from '~/services/firebaseAnalytics';
import {setInAppMessaging} from '~/services/firebaseInAppMessaging';
import {getValue, RemoteConfigKeys} from '~/services/firebaseRemoteConfig';
import {shareMessage} from '~/utils/shareLink';
import type {RootStackParamList} from '~/types/navigation';

import ScreenHomeView from './ScreenHomeView';
import type {ListFeature, ScreenHomeContainerProps} from './ScreenHomeTypes';

const ScreenHomeContainer: React.FunctionComponent<ScreenHomeContainerProps> =
  ({navigation}) => {
    const [isShowFocus, setisShowFocus] = React.useState(false);
    const navigateAndAnalytics = (screenName: keyof RootStackParamList) => {
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
        title: 'Form',
        icon: 'account-box',
        onPress: () => navigateAndAnalytics('Form'),
      },
      {
        title: 'Collapsible Background',
        icon: 'account-box',
        onPress: () => navigateAndAnalytics('Collapsible Background'),
      },
      {
        title: 'Collapsible Default',
        icon: 'account-box',
        onPress: () => navigateAndAnalytics('Collapsible Default'),
      },
      {
        title: 'Collapsible Sticky',
        icon: 'account-box',
        onPress: () => navigateAndAnalytics('Collapsible Sticky'),
      },
      {
        title: 'Collapsible Subheader',
        icon: 'account-box',
        onPress: () => navigateAndAnalytics('Collapsible Subheader'),
      },
      {
        title: 'Fetch Api',
        icon: 'account-box',
        onPress: () => navigateAndAnalytics('Fetch Api'),
      },
      {
        title: 'List Image',
        icon: 'image',
        onPress: () => navigateAndAnalytics('FlatList Image'),
      },
      {
        title: 'List Tabs',
        icon: 'image',
        onPress: () => navigateAndAnalytics('Tabs'),
      },
      {
        title: 'Webview',
        icon: 'google',
        onPress: () => navigateAndAnalytics('Webview Google'),
      },
      {
        title: 'Terms & Condition',
        icon: 'google',
        onPress: () => navigateAndAnalytics('Terms Condition'),
      },
    ];
    const textFirebaseConfig = getValue(RemoteConfigKeys.AWESOME_NEW_FEATURE);
    const contactWhatsapp = getValue(RemoteConfigKeys.WHATSAPP_NUMBER).value;
    const handleSendWhatsapp = () => {
      const sendText = 'Hi I need help';
      const basicLink = `https://wa.me/${contactWhatsapp}?text=${sendText}`;
      const sendLink = encodeURI(basicLink);
      console.log('sendLInk', sendLink);
      Linking.openURL(sendLink);
    };
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
          handleSendWhatsapp,
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
