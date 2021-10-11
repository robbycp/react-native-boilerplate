jest.mock('@react-native-firebase/in-app-messaging', () =>
  jest.fn(() => ({
    setMessagesDisplaySuppressed: jest.fn(() => ({})),
  })),
);
