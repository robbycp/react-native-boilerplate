import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

interface AdsBannerProps {
  unitId?: string;
  size: string | typeof BannerAdSize;
}

function AdsBanner({unitId, size}: AdsBannerProps) {
  const adUnitId = __DEV__ ? TestIds.BANNER : unitId;
  return (
    <BannerAd
      unitId={adUnitId || TestIds.BANNER}
      size={size}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}

export default AdsBanner;
