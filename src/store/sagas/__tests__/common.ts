import {expectSaga} from 'redux-saga-test-plan';

import Common from '~/services/FirestoreModel/Common';
import * as ducksCommon from '~/store/slices/common';
import {CommonData} from '~/types/common';

import * as sagasCommon from '../common';

describe('Sagas: ', () => {
  describe('commonFetchSaga', () => {
    const fakeContent = {
      data: () => ({
        content: 'fake content',
      }),
    };
    const action = {
      type: 'test',
      payload: {
        key: CommonData.privacyPolicy,
      },
    };
    const error = new Error('Error Common');
    test('should get Firestore Data from Common and dispatch success action', async () => {
      return expectSaga(sagasCommon.commonFetchSaga, action)
        .provide({
          call(effect, next) {
            // Check for the API call to return fake value
            if (effect.fn === Common.getDataById) {
              return fakeContent;
            }
            // Allow Redux Saga to handle other `call` effects
            return next();
          },
        })
        .put(
          ducksCommon.commonFetchSuccess({
            key: action.payload.key,
            content: fakeContent.data().content,
          }),
        )
        .dispatch(ducksCommon.commonFetch({key: action.payload.key}))
        .run();
    });
    test('should get Firestore Data from Common and dispatch failed action', async () => {
      return expectSaga(sagasCommon.commonFetchSaga, action)
        .provide({
          call(effect, next) {
            // Check for the API call to return fake value
            if (effect.fn === Common.getDataById) {
              throw error;
            }
            // Allow Redux Saga to handle other `call` effects
            return next();
          },
        })
        .put(ducksCommon.commonFetchFailed())
        .dispatch(ducksCommon.commonFetch({key: action.payload.key}))
        .run();
    });
  });
});
