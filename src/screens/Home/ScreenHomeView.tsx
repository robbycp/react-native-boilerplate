import React from 'react';
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
  List,
  Subheading,
  Text,
  Title,
  useTheme,
} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import YoutubePlayer from '~/components/basic/YoutubePlayer';
import metrics from '~/style/metrics';
import {ScreenName} from '~/types/navigation';
import LoadingOverlay from '~/components/basic/Loading/LoadingOverlay';

import ClipboardHome from './ClipboardHome';
import HTMLHome from './HTMLHome';
import LanguageOption from './LanguageOption';
import NetworkRead from './NetworkRead';
import Signin from './Signin';
import {ScreenHomeViewProps} from './ScreenHomeTypes';
import SnackbarHome from './SnackbarHome';

const marginVideoPlayer = 16;

const styles = StyleSheet.create({
  videoPlayer: {
    margin: marginVideoPlayer,
    width: metrics.deviceWidth,
  },
});

const ScreenHomeView = ({
  handleShareMessage,
  listFeatures,
  navigation,
  textFirebaseConfig,
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
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <LoadingOverlay isVisible={isLoadingOverlay} />
        <View
          style={[
            theme.spacing.m16,
            {
              ...theme.spacing.p0,
              backgroundColor: theme.colors.custom.amber100,
            },
          ]}>
          <Title>{t('home.functionalFeatures')}</Title>
          <Subheading>{t('home.firebaseRemoteConfig')}</Subheading>
          <Text>
            {t('home.firebaseRemoteConfig')} : {textFirebaseConfig.value}
          </Text>
          <Subheading>{t('home.shareLink')}</Subheading>
          <Button onPress={handleShareMessage}>{t('home.shareButton')}</Button>
          <Subheading>{t('home.youtubePlayer')}</Subheading>
          <YoutubePlayer
            style={styles.videoPlayer}
            videoId="iee2TATGMyI"
            width={metrics.deviceWidth - 2 * marginVideoPlayer}
          />
          <Subheading>{t('home.authentication')}</Subheading>
          <Signin />
          <Subheading>Render HTML</Subheading>
          <HTMLHome />
          <Subheading>{t('home.networkRead')}</Subheading>
          <NetworkRead />
          <Subheading>Clipboard</Subheading>
          <ClipboardHome />
          <Subheading>{t('home.modalPrivacy')}</Subheading>
          <Button onPress={() => navigation.navigate(ScreenName.MODAL_PRIVACY)}>
            {t('home.privacy')}
          </Button>
          <Subheading>{t('common.loading')} Overlay</Subheading>
          <Button onPress={handleLoadingOverlay}>{t('common.loading')}</Button>
          <Subheading>Snackbar</Subheading>
          <SnackbarHome />
          <Subheading>{t('home.selectLanguage')}</Subheading>
          <LanguageOption />
          <Title>{t('home.otherFeature')}</Title>
        </View>
        <View>
          {listFeatures.map((item, position) => (
            <List.Item
              key={`${position}-${item.title}`}
              title={item.title}
              onPress={item.onPress}
              left={props => <List.Icon {...props} icon={item.icon} />}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenHomeView;
