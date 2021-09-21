jest.mock('@react-native-firebase/auth', () => () => ({
  auth: () => ({
    currentUser: {},
    signInWithCredential: () => ({}),
    signOut: () => ({}),
  }),
  FirebaseAuthTypes: {},
}));
