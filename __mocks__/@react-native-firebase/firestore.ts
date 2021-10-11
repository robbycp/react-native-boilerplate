jest.mock('@react-native-firebase/firestore', () => () => ({
  collection: () => ({
    doc: () => ({
      get: () => true,
    }),
  }),
}));
