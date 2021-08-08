import {call, getContext, put} from 'redux-saga/effects';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

import ModelUser from '~/services/FirestoreModel/User';
import {
  authCheckFailed,
  authCheckSuccess,
  authMe,
  authMeFailed,
  authMeSuccess,
  authSigninFailed,
  authSigninSuccess,
  authSignout,
  authSignoutFailed,
  authSignoutSuccess,
  authSignup,
  authSignupFailed,
  authSignupSuccess,
} from '~/store/slices/auth';
import {currentUser, signInGoogle, signOut} from '~/services/firebaseAuth';
import {ContextName, RootContext} from '../rootContext';
import {ScreenName} from '~/types/navigation';
import {ClientData, FirebaseUserCredential} from '~/types/user';
import {FirestoreData} from '~/services/firebaseFirestore';

export function* authCheckSaga() {
  try {
    const user: FirebaseAuthTypes.User = yield call(currentUser);
    if (user) {
      yield put(authMe(user.uid));
    }
    yield put(authCheckSuccess(!!user));
  } catch (error) {
    yield put(authCheckFailed(error));
  }
}

export function* authMeSaga(action) {
  try {
    const userId = action.payload;
    const userData: FirestoreData<ClientData> = yield call(
      ModelUser.getDataById,
      userId,
    );
    const userDataClient = userData.data();
    if (userData.exists) {
      yield put(authSignout);
      return;
    }
    yield put(
      authMeSuccess({
        id: userData.id,
        displayName: userDataClient?.displayName || null,
        email: userDataClient?.email || null,
        photoURL: userDataClient?.photoURL || null,
        username: userDataClient?.username || null,
      }),
    );
  } catch (error) {
    yield put(authMeFailed(error));
  }
}

export function* authSigninSaga() {
  const navigator: RootContext[ContextName.NAVIGATOR] = yield getContext(
    ContextName.NAVIGATOR,
  );
  try {
    let userAuth: FirebaseUserCredential;
    let userData: FirestoreData<ClientData>;

    userAuth = yield call(signInGoogle);
    userData = yield call(ModelUser.getDataById, userAuth.user.uid);

    yield put(authSigninSuccess());

    const userDataClient = userData.data();
    if (userData.exists) {
      yield put(
        authMeSuccess({
          id: userData.id,
          displayName: userDataClient?.displayName || null,
          email: userDataClient?.email || null,
          photoURL: userDataClient?.photoURL || null,
          username: userDataClient?.username || null,
        }),
      );
      navigator.navigate(ScreenName.HOME);
    } else {
      const userEmail = userAuth.user.email;
      yield put(
        authSignup({
          id: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          email: userAuth.user.email,
          photoURL: userAuth.user.photoURL,
          username: userEmail?.substring(0, userEmail.indexOf('@')),
        }),
      );
    }
  } catch (error) {
    yield put(authSignout());
    yield put(authSigninFailed(error));
  }
}

export function* authSignupSaga(action) {
  const navigator: RootContext[ContextName.NAVIGATOR] = yield getContext(
    ContextName.NAVIGATOR,
  );
  try {
    const createdUser: ClientData = yield call(
      ModelUser.createDataById,
      action.payload,
    );
    yield put(authSignupSuccess());
    yield put(authMeSuccess(createdUser));
    navigator.navigate(ScreenName.HOME);
  } catch (error) {
    yield put(authSignupFailed(error));
  }
}

export function* authSignoutSaga() {
  const navigator: RootContext[ContextName.NAVIGATOR] = yield getContext(
    ContextName.NAVIGATOR,
  );
  try {
    yield call(signOut);
    yield put(authSignoutSuccess());
    navigator.popToTop();
  } catch (error) {
    yield put(authSignoutFailed(error));
  }
}
