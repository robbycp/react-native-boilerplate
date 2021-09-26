jest.mock('@react-native-firebase/remote-config', () =>
  jest.fn(() => ({
    activate: jest.fn(() => ({})),
    fetch: jest.fn(() => ({})),
    getValue: jest.fn(() => ({})),
    setDefaults: jest.fn(() => ({})),
  })),
);
