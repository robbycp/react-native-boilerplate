jest.mock('@react-native-clipboard/clipboard', () => ({
  getString: jest.fn(() => ({})),
  setString: jest.fn(() => ({})),
}));
