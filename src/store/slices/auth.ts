import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ReduxModule} from '~/types/redux';
import {Auth} from '~/types/user';
import {RootState} from '~/store/rootReducers';

interface AuthState {
  data: Auth;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  data: {
    id: '',
    credential: '',
    email: '',
  },
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: ReduxModule.AUTH,
  initialState,
  reducers: {
    authCheckRequest: state => {
      state.isLoading = true;
    },
    authCheckFailed: state => {
      state.isLoading = false;
    },
    authCheckSuccess: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.isAuthenticated = action.payload;
    },
  },
});

export const {authCheckRequest, authCheckFailed, authCheckSuccess} =
  authSlice.actions;

export const getDataAuth = (state: RootState) => state.auth.data;

export default authSlice.reducer;
