import React from 'react';
import {View} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {ActivityIndicator, Button} from 'react-native-paper';

import {AuthMethod} from '~/types/user';

import {SigninViewProps} from './signinTypes';

const SigninView = ({
  handleSignin,
  handleSignout,
  isAuthenticated,
  isLoading,
}: SigninViewProps) => {
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {isAuthenticated ? (
            <>
              <Button onPress={handleSignout}>Signout</Button>
            </>
          ) : (
            <>
              <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => handleSignin(AuthMethod.GOOGLE)}
              />
            </>
          )}
        </>
      )}
    </View>
  );
};

export default SigninView;
