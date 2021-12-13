jest.mock('@react-native-firebase/admob', () => ({
  InterstitialAd: {
    createForAdRequest: () => ({}),
  },
  AdEventType: {
    LOADED: 'loaded',
  },
  TestIds: {
    INTERSTITIAL: 'interstitial',
  },
  FirebaseAdMobTypes: {
    InterstitialAd: 'interstitialAd',
  },
}));
