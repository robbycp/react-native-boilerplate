import {delay, getContext, put} from 'redux-saga/effects';

import {authCheckRequest} from '~/store/slices/auth';
import {appStartCheckSuccess} from '~/store/slices/app';
import {ScreenName} from '~/types/navigation';
import {ContextName, RootContext} from '~/store/rootContext';

export function* appStartCheckSaga() {
  const navigator: RootContext[ContextName.NAVIGATOR] = yield getContext(
    ContextName.NAVIGATOR,
  );
  yield delay(2000);
  // make the call to the api
  yield put(authCheckRequest());
  yield put(appStartCheckSuccess());
  navigator.replace(ScreenName.HOME);
}
