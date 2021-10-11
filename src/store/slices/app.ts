import {createSlice} from '@reduxjs/toolkit';

import {ReduxModule} from '~/types/redux';

export interface AppState {
  isLoading: boolean;
  isNavigationReady: boolean;
}

export const initialState: AppState = {
  isLoading: false,
  isNavigationReady: false,
};

export const appSlice = createSlice({
  name: ReduxModule.APP,
  initialState,
  reducers: {
    appNavigationReady: state => {
      state.isNavigationReady = true;
    },
    appStartCheck: state => {
      state.isLoading = true;
    },
    appStartCheckFailed: state => {
      state.isLoading = false;
    },
    appStartCheckSuccess: state => {
      state.isLoading = false;
    },
  },
});

export const {
  appNavigationReady,
  appStartCheck,
  appStartCheckFailed,
  appStartCheckSuccess,
} = appSlice.actions;

export default appSlice.reducer;
