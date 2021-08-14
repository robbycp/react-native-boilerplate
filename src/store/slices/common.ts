import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CommonData} from '~/types/common';

import {ReduxModule} from '~/types/redux';

type CommonKey = CommonData.privacyPolicy | CommonData.termsAndCondition;

interface CommonState {
  [CommonData.privacyPolicy]: string | undefined;
  [CommonData.termsAndCondition]: string | undefined;
  isLoading: boolean;
}

const initialState: CommonState = {
  [CommonData.privacyPolicy]: '',
  [CommonData.termsAndCondition]: '',
  isLoading: false,
};

export const commonSlice = createSlice({
  name: ReduxModule.COMMON,
  initialState,
  reducers: {
    commonFetch: (state, action: PayloadAction<{key: CommonKey}>) => {
      state.isLoading = true;
    },
    commonFetchFailed: state => {
      state.isLoading = false;
    },
    commonFetchSuccess: (
      state,
      action: PayloadAction<{key: CommonKey; content: string | undefined}>,
    ) => {
      state.isLoading = false;
      state[action.payload.key] = action.payload.content;
    },
    commonClear: (state, action: PayloadAction<{key: CommonKey}>) => {
      state[action.payload.key] = '';
    },
  },
});

export const {commonFetch, commonFetchFailed, commonFetchSuccess, commonClear} =
  commonSlice.actions;

export default commonSlice.reducer;
