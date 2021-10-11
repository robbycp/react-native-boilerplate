import {BannerAdSize} from '@react-native-firebase/admob';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

import AdsBanner from '~/components/basic/Ads/AdsBanner';
import {useInterstitial} from '~/services/firebaseAdmob';

const AdsListView = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const [isAdsLoaded, interstitial] = useInterstitial('interstitialAdsList');

  const handleInterstialAds = () => {
    navigation.goBack();
    interstitial.show();
  };
  return (
    <ScrollView>
      <AdsBanner size={BannerAdSize.FULL_BANNER} />
      {isAdsLoaded && (
        <Button onPress={handleInterstialAds}>Interstitial ads</Button>
      )}
    </ScrollView>
  );
};

export default AdsListView;
