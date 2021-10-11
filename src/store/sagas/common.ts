import {call, put} from 'redux-saga/effects';
import {FirestoreData} from '~/services/firebaseFirestore';
import Common from '~/services/FirestoreModel/Common';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {CommonKey} from '~/types/common';

import {commonFetchFailed, commonFetchSuccess} from '../slices/common';

export function* commonFetchSaga(action: PayloadAction<{key: CommonKey}>) {
  try {
    const key = action.payload.key;
    const contentData: FirestoreData<{content: string}> = yield call(
      Common.getDataById,
      key,
    );
    yield put(
      commonFetchSuccess({
        key,
        content: contentData.data()?.content,
      }),
    );
  } catch (error) {
    yield put(commonFetchFailed());
  }
}
