import 'react-native';
import React from 'react';
import App from '~/index';
import {render, waitFor} from '@testing-library/react-native';

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.setTimeout(100000);

jest.mock('@react-native-firebase/auth', () => () => ({
  auth: () => ({
    currentUser: null,
    signInWithCredential: () => ({}),
    signOut: () => ({}),
  }),
  FirebaseAuthTypes: {},
}));

describe('src/index', () => {
  it('renders Screen Splash as initial Screen', async () => {
    const {findByTestId} = render(<App />);

    const splashImageLogo = await waitFor(() => {
      return findByTestId('splashImageLogo');
    });
    expect(splashImageLogo).toBeTruthy();
  });
  it('renders Screen Home after checking app and auth from Screen Splash', async () => {
    const {findByTestId} = render(<App />);

    const splashImageLogo = await waitFor(() => {
      return findByTestId('splashImageLogo');
    });
    expect(splashImageLogo).toBeTruthy();

    const homeEnvironment = await waitFor(() => {
      return findByTestId('environmentValue');
    });
    expect(homeEnvironment).toBeTruthy();
  });
});
