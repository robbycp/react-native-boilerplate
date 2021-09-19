import type {AnyAction} from '@reduxjs/toolkit';

import reducer, * as ducksAuth from '../auth';
import type {AuthState} from '../auth';
import {AuthMethod} from '~/types/user';

const errorAuth = {
  name: 'error',
  message: 'Error',
};

const authMeResponse = {
  id: '12345678',
  displayName: 'Test',
  email: 'test@mail.com',
  photoURL: 'https://www.google.com',
  username: 'test',
};

const signupData = {...authMeResponse};

describe('Reducers :', () => {
  test('should return the initial state', () => {
    const anyAction: AnyAction = {type: ''};
    expect(reducer(undefined, anyAction)).toEqual(ducksAuth.initialState);
  });
  test('should handle start auth check', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      check: {
        ...ducksAuth.initialState.check,
        isLoading: false,
        error: errorAuth,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      check: {
        ...ducksAuth.initialState.check,
        isLoading: true,
      },
    };
    expect(reducer(previousState, ducksAuth.authCheckRequest())).toEqual(
      expectedState,
    );
  });
  test('should handle start auth check failed', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      check: {
        ...ducksAuth.initialState.check,
        isLoading: true,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      check: {
        ...ducksAuth.initialState.check,
        isLoading: false,
        error: errorAuth,
      },
    };
    expect(
      reducer(previousState, ducksAuth.authCheckFailed(errorAuth)),
    ).toEqual(expectedState);
  });
  test('should handle start auth check Success', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      isAuthenticated: false,
      check: {
        ...ducksAuth.initialState.check,
        isLoading: true,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      isAuthenticated: true,
      check: {
        ...ducksAuth.initialState.check,
        isLoading: false,
      },
    };
    expect(reducer(previousState, ducksAuth.authCheckSuccess(true))).toEqual(
      expectedState,
    );
  });

  test('should handle start auth me fetch', () => {
    const userId = '12345678';
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      me: {
        ...ducksAuth.initialState.me,
        isLoading: false,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      me: {
        ...ducksAuth.initialState.me,
        data: {
          ...ducksAuth.initialState.me.data,
          id: userId,
        },
        isLoading: true,
      },
    };
    expect(reducer(previousState, ducksAuth.authMe(userId))).toEqual(
      expectedState,
    );
  });
  test('should handle start auth me fetch failed', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      me: {
        ...ducksAuth.initialState.me,
        isLoading: true,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      me: {
        ...ducksAuth.initialState.me,
        isLoading: false,
        error: errorAuth,
      },
    };
    expect(reducer(previousState, ducksAuth.authMeFailed(errorAuth))).toEqual(
      expectedState,
    );
  });
  test('should handle start auth me fetch Success', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      isAuthenticated: false,
      me: {
        ...ducksAuth.initialState.me,
        isLoading: true,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      isAuthenticated: true,
      me: {
        ...ducksAuth.initialState.me,
        data: {...authMeResponse},
        isLoading: false,
      },
    };
    expect(
      reducer(previousState, ducksAuth.authMeSuccess(authMeResponse)),
    ).toEqual(expectedState);
  });

  test('should handle start auth signin', () => {
    const signinMethod = AuthMethod.GOOGLE;
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      signin: {
        ...ducksAuth.initialState.signin,
        isLoading: false,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      signin: {
        ...ducksAuth.initialState.signin,
        method: signinMethod,
        isLoading: true,
      },
    };
    expect(reducer(previousState, ducksAuth.authSignin(signinMethod))).toEqual(
      expectedState,
    );
  });
  test('should handle start auth signin failed', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      signin: {
        ...ducksAuth.initialState.signin,
        isLoading: true,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      signin: {
        ...ducksAuth.initialState.signin,
        isLoading: false,
        error: errorAuth,
      },
    };
    expect(
      reducer(previousState, ducksAuth.authSigninFailed(errorAuth)),
    ).toEqual(expectedState);
  });
  test('should handle start auth signin Success', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      signin: {
        ...ducksAuth.initialState.signin,
        method: AuthMethod.GOOGLE,
        isLoading: true,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      signin: {
        ...ducksAuth.initialState.signin,
        isLoading: false,
      },
    };
    expect(reducer(previousState, ducksAuth.authSigninSuccess())).toEqual(
      expectedState,
    );
  });

  test('should handle start auth signup', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      signup: {
        ...ducksAuth.initialState.signup,
        isLoading: false,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      signup: {
        ...ducksAuth.initialState.signup,
        data: {
          ...signupData,
        },
        isLoading: true,
      },
    };
    expect(reducer(previousState, ducksAuth.authSignup(signupData))).toEqual(
      expectedState,
    );
  });
  test('should handle start auth signup failed', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      signup: {
        ...ducksAuth.initialState.signup,
        isLoading: true,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      signup: {
        ...ducksAuth.initialState.signup,
        isLoading: false,
        error: errorAuth,
      },
    };
    expect(
      reducer(previousState, ducksAuth.authSignupFailed(errorAuth)),
    ).toEqual(expectedState);
  });
  test('should handle start auth signup Success', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      signup: {
        ...ducksAuth.initialState.signup,
        error: errorAuth,
        data: {...signupData},
        isLoading: true,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      signup: {
        ...ducksAuth.initialState.signup,
        data: {...ducksAuth.initialState.signup.data},
        isLoading: false,
      },
    };
    expect(reducer(previousState, ducksAuth.authSignupSuccess())).toEqual(
      expectedState,
    );
  });

  test('should handle start auth signout', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      signout: {
        ...ducksAuth.initialState.signout,
        isLoading: false,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      signout: {
        ...ducksAuth.initialState.signout,
        isLoading: true,
      },
    };
    expect(reducer(previousState, ducksAuth.authSignout())).toEqual(
      expectedState,
    );
  });
  test('should handle start auth signout failed', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      signout: {
        ...ducksAuth.initialState.signout,
        isLoading: true,
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      signout: {
        ...ducksAuth.initialState.signout,
        isLoading: false,
        error: errorAuth,
      },
    };
    expect(
      reducer(previousState, ducksAuth.authSignoutFailed(errorAuth)),
    ).toEqual(expectedState);
  });
  test('should handle start auth signout Success', () => {
    const previousState: AuthState = {
      ...ducksAuth.initialState,
      isAuthenticated: true,
      signout: {
        ...ducksAuth.initialState.signout,
        error: errorAuth,
        isLoading: true,
      },
      me: {
        ...ducksAuth.initialState.me,
        data: {
          ...signupData,
        },
      },
    };
    const expectedState: AuthState = {
      ...ducksAuth.initialState,
      isAuthenticated: false,
      signout: {
        ...ducksAuth.initialState.signout,
        isLoading: false,
      },
      me: {
        ...ducksAuth.initialState.me,
      },
    };
    expect(reducer(previousState, ducksAuth.authSignoutSuccess())).toEqual(
      expectedState,
    );
  });
});
