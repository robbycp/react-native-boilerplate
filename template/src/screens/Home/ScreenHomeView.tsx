import React from 'react';
import Config from 'react-native-config';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  Button,
  Divider,
  List,
  Subheading,
  Switch,
  Text,
  Title,
  useTheme,
} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {getReadableVersion} from 'react-native-device-info';
import * as Sentry from '@sentry/react-native';

import LoadingOverlay from '~/components/basic/Loading/LoadingOverlay';
import metrics from '~/style/metrics';

import ClipboardHome from './ClipboardHome';
import HTMLHome from './HTMLHome';
import LanguageOption from './LanguageOption';
import NetworkRead from './NetworkRead';
import Signin from './Signin';
import {ScreenHomeViewProps} from './ScreenHomeTypes';
import SnackbarHome from './SnackbarHome';

const marginVideoPlayer = 16;

const styles = StyleSheet.create({
  divider: {height: 3},
  videoPlayer: {
    margin: marginVideoPlayer,
    width: metrics.deviceWidth,
  },
});

declare const global: {HermesInternal: null | {}};

const ScreenHomeView = ({
  handleShareMessage,
  handleSendWhatsapp,
  isShowFocus,
  listFeatures,
  navigation,
  textFirebaseConfig,
  setisShowFocus,
}: ScreenHomeViewProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [isLoadingOverlay, setIsLoadingOverlay] = React.useState(false);

  const handleLoadingOverlay = () => {
    setIsLoadingOverlay(true);
    setTimeout(() => {
      setIsLoadingOverlay(false);
    }, 2000);
  };

  const theme = useTheme();
  const {t} = useTranslation();

  const usingHermes =
    typeof global.HermesInternal === 'object' && global.HermesInternal !== null;

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <LoadingOverlay isVisible={isLoadingOverlay} />
        <View style={[theme.spacing.m16, theme.spacing.p0]}>
          <Title>{t('home.functionalFeatures')}</Title>
          <Subheading>{t('home.version')}</Subheading>
          <Text>{getReadableVersion()}</Text>
          <Subheading>{t('home.config')}</Subheading>
          <Text testID="environmentValue">{Config.ENVIRONMENT}</Text>
          <Subheading>{t('home.firebaseRemoteConfig')}</Subheading>
          <Text>
            {t('home.firebaseRemoteConfig')} : {textFirebaseConfig.value}
          </Text>
          <Subheading>Hermes</Subheading>
          <Text>{usingHermes ? 'True' : 'False'}</Text>
          <Subheading>{t('home.shareLink')}</Subheading>
          <Button onPress={handleShareMessage}>{t('home.shareButton')}</Button>
          <Subheading>{t('home.authentication')}</Subheading>
          <Signin />
          <Subheading>Render HTML</Subheading>
          <HTMLHome />
          <Subheading>{t('home.networkRead')}</Subheading>
          <NetworkRead />
          <Subheading>Clipboard</Subheading>
          <ClipboardHome />
          <Subheading>{t('home.modalPrivacy')}</Subheading>
          <Button onPress={() => navigation.navigate('Modal Privacy')}>
            {t('home.privacy')}
          </Button>
          <Subheading>{t('common.loading')} Overlay</Subheading>
          <Button onPress={handleLoadingOverlay}>{t('common.loading')}</Button>
          <Subheading>Snackbar</Subheading>
          <SnackbarHome />
          <Subheading>Whatsapp</Subheading>
          <Subheading>{t('home.selectLanguage')}</Subheading>
          <Button onPress={handleSendWhatsapp}>
            {t('home.whatsappButton')}
          </Button>
          <LanguageOption />
          <Subheading>{t('home.functionalFocus')}</Subheading>
          <Switch
            value={isShowFocus}
            onValueChange={() => setisShowFocus(!isShowFocus)}
          />
          <Subheading>Bismillah OTA versi 6 jancuk</Subheading>
          <Subheading>{t('home.performance')}</Subheading>
          <Subheading>{t('home.error')}</Subheading>
          <Button
            onPress={() => {
              throw new Error('My first Sentry error!');
            }}>
            {t('home.errorSendJS')}
          </Button>
          <Button
            onPress={() => {
              Sentry.nativeCrash();
            }}>
            {t('home.errorSendNative')}
          </Button>
          <Title>{t('home.otherFeature')}</Title>
        </View>
        <View>
          {listFeatures.map((item, position) => (
            <View key={`${position}-${item.title}-${item.icon}-title`}>
              <List.Item
                title={item.title}
                onPress={item.onPress}
                left={props => (
                  <List.Icon
                    key={`${position}-${item.title}-${item.icon}-icon`}
                    {...props}
                    icon={item.icon}
                  />
                )}
              />
              <Divider
                key={`${position}-${item.title}-divider`}
                style={[styles.divider]}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenHomeView;
