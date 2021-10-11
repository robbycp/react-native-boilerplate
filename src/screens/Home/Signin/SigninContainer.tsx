import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '~/store/rootReducers';
import {authSignin, authSignout} from '~/store/slices/auth';
import {AuthMethod} from '~/types/user';

import SigninView from './SigninView';

const SigninContainer = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const isLoading = useSelector(
    (state: RootState) =>
      state.auth.signin.isLoading ||
      state.auth.signup.isLoading ||
      state.auth.signout.isLoading,
  );
  const handleSignin = (method: AuthMethod) => {
    dispatch(authSignin(method));
  };
  const handleSignout = () => {
    dispatch(authSignout());
  };
  return (
    <SigninView
      {...{
        handleSignin,
        handleSignout,
        isAuthenticated,
        isLoading,
      }}
    />
  );
};

export default SigninContainer;
