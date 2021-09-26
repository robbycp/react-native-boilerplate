jest.mock('react-native-device-info', () => ({
  getReadableVersion: jest.fn(() => ({})),
}));
