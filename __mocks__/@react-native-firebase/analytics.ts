jest.mock('@react-native-firebase/analytics', () => () => ({
  setAnalyticsCollectionEnabled: jest.fn(() => ({})),
  logEvent: jest.fn(() => ({})),
  logScreenView: jest.fn(() => ({})),
}));
