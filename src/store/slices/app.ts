import {createSlice} from '@reduxjs/toolkit';

import {ReduxModule} from '~/types/redux';

interface AppState {
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: ReduxModule.APP,
  initialState,
  reducers: {
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

export const {appStartCheck, appStartCheckFailed, appStartCheckSuccess} =
  appSlice.actions;

export default appSlice.reducer;