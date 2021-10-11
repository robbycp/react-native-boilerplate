import type {AnyAction} from '@reduxjs/toolkit';

import i18n from '~/translations';

import reducer, * as ducksSnackbar from '../snackbar';
import type {SnackbarState} from '../snackbar';

const snackbarData = {
  action: {
    type: 'info',
    payload: {},
  },
  duration: 7000,
  isVisible: false,
  message: 'test',
  textButton: i18n.t('common.dismiss'),
  type: 'info' as SnackbarState['type'],
};

describe('Reducers :', () => {
  test('should return the initial state', () => {
    const anyAction: AnyAction = {type: ''};
    expect(reducer(undefined, anyAction)).toEqual(ducksSnackbar.initialState);
  });
  test('should handle hide snackbar', () => {
    const previousState: SnackbarState = {
      ...ducksSnackbar.initialState,
      ...snackbarData,
      isVisible: true,
    };
    const expectedState: SnackbarState = {
      ...ducksSnackbar.initialState,
    };
    expect(reducer(previousState, ducksSnackbar.snackbarHide())).toEqual(
      expectedState,
    );
  });
  test('should handle show snackbar', () => {
    const previousState: SnackbarState = {
      ...ducksSnackbar.initialState,
    };
    const expectedState: SnackbarState = {
      ...ducksSnackbar.initialState,
      ...snackbarData,
      isVisible: true,
    };
    expect(
      reducer(previousState, ducksSnackbar.snackbarShow(snackbarData)),
    ).toEqual(expectedState);
  });
  test('should handle show snackbar when payload only contains message', () => {
    const snackbarMessage = {
      message: 'show snackbar',
    };
    const previousState: SnackbarState = {
      ...ducksSnackbar.initialState,
    };
    const expectedState: SnackbarState = {
      ...ducksSnackbar.initialState,
      message: snackbarMessage.message,
      isVisible: true,
    };
    expect(
      reducer(previousState, ducksSnackbar.snackbarShow(snackbarMessage)),
    ).toEqual(expectedState);
  });
  test('should handle show snackbar when action.payload is empty', () => {
    const snackbarEmpty = {
      action: {
        type: 'info',
      },
      message: 'test',
    };
    const previousState: SnackbarState = {
      ...ducksSnackbar.initialState,
    };
    const expectedState: SnackbarState = {
      ...ducksSnackbar.initialState,
      ...snackbarEmpty,
      action: {
        type: snackbarEmpty.action.type,
        payload: {},
      },
      isVisible: true,
    };
    expect(
      reducer(previousState, ducksSnackbar.snackbarShow(snackbarEmpty)),
    ).toEqual(expectedState);
  });
});
