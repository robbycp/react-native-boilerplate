import React from 'react';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
  FirebaseAdMobTypes,
} from '@react-native-firebase/admob';

function initialInterstitial(adUnitId: string) {
  const adsId = __DEV__ ? TestIds.INTERSTITIAL : adUnitId;

  const interstitial = InterstitialAd.createForAdRequest(adsId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });
  return interstitial;
}

/**
 * Initial adslist per unitId, and put it in interstitials
 * useInterstitial with string key
 */
const interstitialAdsList = initialInterstitial(
  'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy',
);
const interstitials = {
  interstitialAdsList,
};

type Interstitials = keyof typeof interstitials;

export function useInterstitial(
  interstitialKey: Interstitials,
): [boolean, FirebaseAdMobTypes.InterstitialAd] {
  const [loaded, setLoaded] = React.useState(false);

  const interstitial = interstitials[interstitialKey];
  React.useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [loaded, interstitial];
}
