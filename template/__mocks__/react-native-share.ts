jest.mock('react-native-share', () => ({
  open: jest.fn(() => ({})),
  ShareOptions: {},
}));
