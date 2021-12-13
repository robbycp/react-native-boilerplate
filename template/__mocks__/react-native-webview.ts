jest.mock('react-native-webview', () => ({
  WebView: jest.fn(() => ({})),
}));
