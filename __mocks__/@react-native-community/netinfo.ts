jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: jest.fn(isOnline => isOnline),
}));
