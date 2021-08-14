import {call, put} from 'redux-saga/effects';
import {FirestoreData} from '~/services/firebaseFirestore';
import Common from '~/services/FirestoreModel/Common';
import {commonFetchFailed, commonFetchSuccess} from '../slices/common';

export function* commonFetchSaga(action) {
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
