import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ReduxModule} from '~/types/redux';
import {Auth, AuthMethod, ClientData} from '~/types/user';

export interface AuthState {
  check: {
    error: Error | null;
    isLoading: boolean;
  };
  data: Auth;
  isAuthenticated: boolean;
  isLoading: boolean;
  me: {
    data: ClientData;
    error: Error | null;
    isLoading: boolean;
  };
  signin: {
    isLoading: boolean;
    error: Error | null;
    method: AuthMethod | null;
  };
  signout: {
    isLoading: boolean;
    error: Error | null;
  };
  signup: {
    data: ClientData;
    isLoading: boolean;
    error: Error | null;
  };
}

export const initialState: AuthState = {
  check: {
    error: null,
    isLoading: false,
  },
  data: {
    id: '',
    credential: '',
    email: '',
  },
  isAuthenticated: false,
  isLoading: false,
  me: {
    data: {
      id: '',
      displayName: '',
      email: '',
      photoURL: '',
      username: '',
    },
    error: null,
    isLoading: false,
  },
  signin: {
    isLoading: false,
    error: null,
    method: null,
  },
  signout: {
    isLoading: false,
    error: null,
  },
  signup: {
    data: {
      id: '',
      displayName: '',
      email: '',
      photoURL: '',
      username: '',
    },
    isLoading: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: ReduxModule.AUTH,
  initialState,
  reducers: {
    authCheckRequest: state => {
      state.check.isLoading = true;
      state.check.error = null;
    },
    authCheckFailed: (state, action: PayloadAction<Error>) => {
      state.check.isLoading = false;
      state.check.error = action.payload;
    },
    authCheckSuccess: (state, action: PayloadAction<boolean>) => {
      state.check.isLoading = false;
      state.isAuthenticated = action.payload;
    },
    authMe: (state, action: PayloadAction<string>) => {
      state.me.isLoading = true;
      state.me.data.id = action.payload;
    },
    authMeFailed: (state, action: PayloadAction<Error>) => {
      state.me.isLoading = false;
      state.me.error = action.payload;
    },
    authMeSuccess: (state, action: PayloadAction<ClientData>) => {
      state.me.isLoading = false;
      state.isAuthenticated = true;
      state.me.data = action.payload;
      state.me.error = null;
    },
    authSignin: (state, action: PayloadAction<AuthMethod>) => {
      state.signin.isLoading = true;
      state.signin.method = action.payload;
    },
    authSigninFailed: (state, action: PayloadAction<Error>) => {
      state.signin.isLoading = false;
      state.signin.error = action.payload;
    },
    authSigninSuccess: state => {
      state.signin.isLoading = false;
      state.signin.error = null;
      state.signin.method = null;
    },
    authSignup: (state, action: PayloadAction<ClientData>) => {
      state.signup.isLoading = true;
      state.signup.data = action.payload;
    },
    authSignupFailed: (state, action: PayloadAction<Error>) => {
      state.signup.isLoading = false;
      state.signup.error = action.payload;
    },
    authSignupSuccess: state => {
      state.signup.isLoading = false;
      state.signup.error = null;
      state.signup.data = {
        ...initialState.signup.data,
      };
    },
    authSignout: state => {
      state.signout.isLoading = true;
    },
    authSignoutFailed: (state, action: PayloadAction<Error>) => {
      state.signout.isLoading = false;
      state.signout.error = action.payload;
    },
    authSignoutSuccess: state => {
      state.signout.isLoading = false;
      state.signout.error = null;
      state.isAuthenticated = false;
      state.me.data = {
        ...initialState.me.data,
      };
    },
  },
});

export const {
  authCheckRequest,
  authCheckFailed,
  authCheckSuccess,
  authMe,
  authMeFailed,
  authMeSuccess,
  authSignin,
  authSigninFailed,
  authSigninSuccess,
  authSignup,
  authSignupFailed,
  authSignupSuccess,
  authSignout,
  authSignoutFailed,
  authSignoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
