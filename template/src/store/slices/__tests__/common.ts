import type {AnyAction} from '@reduxjs/toolkit';

import {CommonData} from '~/types/common';

import reducer, * as ducksCommon from '../common';
import type {CommonState} from '../common';

describe('Reducers :', () => {
  test('should return the initial state', () => {
    const anyAction: AnyAction = {type: ''};
    expect(reducer(undefined, anyAction)).toEqual(ducksCommon.initialState);
  });
  test('should handle start common fetch', () => {
    const expectedState: CommonState = {
      ...ducksCommon.initialState,
      isLoading: true,
    };
    expect(
      reducer(
        ducksCommon.initialState,
        ducksCommon.commonFetch({key: CommonData.privacyPolicy}),
      ),
    ).toEqual(expectedState);
  });
  test('should handle start common fetch failed', () => {
    const previousState: CommonState = {
      ...ducksCommon.initialState,
      isLoading: true,
    };
    const expectedState: CommonState = {
      ...ducksCommon.initialState,
      isLoading: false,
    };
    expect(reducer(previousState, ducksCommon.commonFetchFailed())).toEqual(
      expectedState,
    );
  });
  test('should handle start common fetch success', () => {
    const contentPrivacyPolicy = 'content privacy policy';
    const previousState: CommonState = {
      ...ducksCommon.initialState,
      isLoading: true,
    };
    const expectedState: CommonState = {
      ...ducksCommon.initialState,
      isLoading: false,
      [CommonData.privacyPolicy]: contentPrivacyPolicy,
    };
    expect(
      reducer(
        previousState,
        ducksCommon.commonFetchSuccess({
          key: CommonData.privacyPolicy,
          content: contentPrivacyPolicy,
        }),
      ),
    ).toEqual(expectedState);
  });
  test('should handle clear content for specific key', () => {
    const contentPrivacyPolicy = 'content privacy policy';
    const previousState: CommonState = {
      ...ducksCommon.initialState,
      [CommonData.privacyPolicy]: contentPrivacyPolicy,
    };
    const expectedState: CommonState = {
      ...ducksCommon.initialState,
    };
    expect(
      reducer(
        previousState,
        ducksCommon.commonClear({
          key: CommonData.privacyPolicy,
        }),
      ),
    ).toEqual(expectedState);
  });
});
