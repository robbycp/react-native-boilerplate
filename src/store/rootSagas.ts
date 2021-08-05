import {takeLatest, all} from 'redux-saga/effects';

/* ------------- Types ------------- */
import {appStartCheck} from '~/store/slices/app';
import {authCheckRequest} from '~/store/slices/auth';
/* ------------- Sagas ------------- */
import {init} from '~/store/sagas/app';
import {authCheck} from '~/store/sagas/auth';
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const apiGithub = API.create()
// const apiUser = API.create(Config.API_URL)

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(appStartCheck, init),
    takeLatest(authCheckRequest, authCheck),
  ]);
}
