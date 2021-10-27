import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import i18n from '~/translations';

import {ReduxModule} from '~/types/redux';
import {RootState} from '../rootReducers';

export interface SnackbarState {
  action: {
    type: string;
    payload?: any | undefined;
  };
  duration: number;
  isVisible: boolean;
  message: string;
  textButton: string;
  type: 'info' | 'success' | 'error' | 'warning';
}
export interface SnackbarShowProps {
  message: string;
  type?: SnackbarState['type'];
  textButton?: string;
  duration?: number;
  action?: {
    type: string;
    payload?: {};
  };
}

export const initialState: SnackbarState = {
  action: {
    type: '',
    payload: {},
  },
  duration: 7000,
  isVisible: false,
  message: '',
  textButton: i18n.t('common.dismiss'),
  type: 'info',
};

export const snackbarSlice = createSlice({
  name: ReduxModule.SNACKBAR,
  initialState,
  reducers: {
    snackbarHide: state => {
      state.isVisible = initialState.isVisible;
      state.message = initialState.message;
      state.textButton = i18n.t('common.dismiss');
      state.duration = initialState.duration;
      state.type = initialState.type;
      state.action = {
        ...initialState.action,
      };
    },
    snackbarShow: (state, action: PayloadAction<SnackbarShowProps>) => {
      state.isVisible = true;
      state.message = action.payload.message;
      state.textButton = action.payload.textButton || initialState.textButton;
      state.duration = action.payload.duration || initialState.duration;
      state.type = action.payload.type || initialState.type;
      if (action.payload.action) {
        state.action = {
          type: action.payload.action.type,
          payload: action.payload.action.payload || {},
        };
      } else {
        state.action = {...initialState.action};
      }
    },
  },
});

export const {snackbarHide, snackbarShow} = snackbarSlice.actions;

export const getSnackbarState = (state: RootState) => state.snackbar;

export default snackbarSlice.reducer;
