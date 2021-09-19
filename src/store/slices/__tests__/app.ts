import type {AnyAction} from '@reduxjs/toolkit';

import reducer, {
  initialState,
  appStartCheck,
  appStartCheckFailed,
  appStartCheckSuccess,
} from '../app';
import type {AppState} from '../app';

describe('Reducers :', () => {
  test('should return the initial state', () => {
    const anyAction: AnyAction = {type: ''};
    expect(reducer(undefined, anyAction)).toEqual(initialState);
  });
  test('should handle start app check', () => {
    const previousState: AppState = {
      ...initialState,
      isLoading: false,
    };
    const expectedState: AppState = {
      ...initialState,
      isLoading: true,
    };
    expect(reducer(previousState, appStartCheck())).toEqual(expectedState);
  });
  test('should handle start app check failed', () => {
    const previousState: AppState = {
      ...initialState,
      isLoading: true,
    };
    const expectedState: AppState = {
      ...initialState,
      isLoading: false,
    };
    expect(reducer(previousState, appStartCheckFailed())).toEqual(
      expectedState,
    );
  });
  test('should handle start app check Success', () => {
    const previousState: AppState = {
      ...initialState,
      isLoading: true,
    };
    const expectedState: AppState = {
      ...initialState,
      isLoading: false,
    };
    expect(reducer(previousState, appStartCheckSuccess())).toEqual(
      expectedState,
    );
  });
});
