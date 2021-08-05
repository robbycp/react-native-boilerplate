import {put, select} from 'redux-saga/effects';

import {
  authCheckFailed,
  authCheckSuccess,
  getDataAuth,
} from '~/store/slices/auth';

export function* authCheck() {
  try {
    const dataAuth: ReturnType<typeof getDataAuth> = yield select(getDataAuth);
    yield put(authCheckSuccess(!!dataAuth.credential));
  } catch (error) {
    yield put(authCheckFailed());
  }
}
