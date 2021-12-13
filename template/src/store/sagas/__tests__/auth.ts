import {expectSaga} from 'redux-saga-test-plan';

import * as ducksAuth from '~/store/slices/auth';
import {AuthMethod} from '~/types/user';
import {ContextName} from '~/store/rootContext';
import {currentUser, signInGoogle, signOut} from '~/services/firebaseAuth';
import ModelUser from '~/services/FirestoreModel/User';

import * as sagasAuth from '../auth';

describe('Sagas: ', () => {
  describe('authCheckSaga', () => {
    test('should check auth when current user exist', () => {
      const dataUser = {uid: '123'};
      return expectSaga(sagasAuth.authCheckSaga)
        .provide({
          call(effect, next) {
            if (effect.fn === currentUser) {
              return dataUser;
            }
            return next();
          },
        })
        .put(ducksAuth.authMe(dataUser.uid))
        .put(ducksAuth.authCheckSuccess(!!dataUser))
        .dispatch(ducksAuth.authCheckRequest())
        .run();
    });
    test('should check auth when current user not exist', () => {
      const dataUser = null;
      return expectSaga(sagasAuth.authCheckSaga)
        .provide({
          call(effect, next) {
            if (effect.fn === currentUser) {
              return dataUser;
            }
            return next();
          },
        })
        .put(ducksAuth.authCheckSuccess(!!dataUser))
        .dispatch(ducksAuth.authCheckRequest())
        .run();
    });
    test('should check auth when failed to get current user', () => {
      const error: Error = {
        name: 'error auth',
        message: 'error user auth',
      };
      return expectSaga(sagasAuth.authCheckSaga)
        .provide({
          call(effect, next) {
            if (effect.fn === currentUser) {
              throw error;
            }
            return next();
          },
        })
        .put(ducksAuth.authCheckFailed(error))
        .dispatch(ducksAuth.authCheckRequest())
        .run();
    });
  });

  describe('authMeSaga', () => {
    const action = {type: 'test', payload: '123'};
    test('should fetch data authenticated user and user data exist', () => {
      const dataUser = {
        id: '123',
        data: () => ({
          displayName: 'test',
          email: 'test',
          photoURL: 'test',
          username: 'test',
        }),
        exists: true,
      };
      return expectSaga(sagasAuth.authMeSaga, action)
        .provide({
          call(effect, next) {
            if (effect.fn === ModelUser.getDataById) {
              return dataUser;
            }
            return next();
          },
        })
        .put(
          ducksAuth.authMeSuccess({
            ...dataUser.data(),
            id: dataUser.id,
          }),
        )
        .dispatch(ducksAuth.authMe(action.payload))
        .run();
    });
    test('should fetch data authenticated user and user data not exist', () => {
      const dataUser = {
        id: '123',
        data: () => ({}),
        exists: false,
      };
      return expectSaga(sagasAuth.authMeSaga, action)
        .provide({
          call(effect, next) {
            if (effect.fn === ModelUser.getDataById) {
              return dataUser;
            }
            return next();
          },
        })
        .put(ducksAuth.authSignout())
        .dispatch(ducksAuth.authMe(action.payload))
        .run();
    });
    test('should check auth when failed to get current user', () => {
      const error: Error = {
        name: 'error auth',
        message: 'error user auth',
      };
      return expectSaga(sagasAuth.authMeSaga, action)
        .provide({
          call(effect, next) {
            if (effect.fn === ModelUser.getDataById) {
              throw error;
            }
            return next();
          },
        })
        .put(ducksAuth.authMeFailed(error))
        .dispatch(ducksAuth.authMe(action.payload))
        .run();
    });
  });

  describe('authSigninSaga', () => {
    const navigatorContext = {
      navigate: () => ({}),
    };
    const dataAuthUser = {
      user: {
        uid: '123',
        displayName: 'test',
        email: 'test@test.com',
        photoURL: 'test',
      },
    };
    test('should signin user and user data exist', () => {
      const dataUser = {
        id: '123',
        data: () => ({
          displayName: 'test',
          email: 'test',
          photoURL: 'test',
          username: 'test',
        }),
        exists: true,
      };
      return expectSaga(sagasAuth.authSigninSaga)
        .provide({
          getContext(effect, next) {
            if (effect === ContextName.NAVIGATOR) {
              return navigatorContext;
            }
            return next();
          },
          call(effect, next) {
            if (effect.fn === signInGoogle) {
              return dataAuthUser;
            }
            if (effect.fn === ModelUser.getDataById) {
              return dataUser;
            }
            return next();
          },
        })
        .put(ducksAuth.authSigninSuccess())
        .put(
          ducksAuth.authMeSuccess({
            ...dataUser.data(),
            id: dataUser.id,
          }),
        )
        .dispatch(ducksAuth.authSignin(AuthMethod.GOOGLE))
        .run();
    });
    test('should signin user and user data not exist', () => {
      const dataUser = {
        id: '123',
        data: () => ({}),
        exists: false,
      };
      return expectSaga(sagasAuth.authSigninSaga)
        .provide({
          getContext(effect, next) {
            if (effect === ContextName.NAVIGATOR) {
              return navigatorContext;
            }
            return next();
          },
          call(effect, next) {
            if (effect.fn === signInGoogle) {
              return dataAuthUser;
            }
            if (effect.fn === ModelUser.getDataById) {
              return dataUser;
            }
            return next();
          },
        })
        .put(
          ducksAuth.authSignup({
            id: dataAuthUser.user.uid,
            displayName: dataAuthUser.user.displayName,
            email: dataAuthUser.user.email,
            photoURL: dataAuthUser.user.photoURL,
            username: dataAuthUser.user.email.substring(
              0,
              dataAuthUser.user.email.indexOf('@'),
            ),
          }),
        )
        .dispatch(ducksAuth.authSignin(AuthMethod.GOOGLE))
        .run();
    });
    test('should signin user and failed', () => {
      const error: Error = {
        name: 'error auth',
        message: 'error user auth',
      };
      return expectSaga(sagasAuth.authSigninSaga)
        .provide({
          getContext(effect, next) {
            if (effect === ContextName.NAVIGATOR) {
              return navigatorContext;
            }
            return next();
          },
          call(effect, next) {
            if (effect.fn === signInGoogle) {
              throw error;
            }
            if (effect.fn === ModelUser.getDataById) {
              throw error;
            }
            return next();
          },
        })
        .put(ducksAuth.authSigninFailed(error))
        .dispatch(ducksAuth.authSignin(AuthMethod.GOOGLE))
        .run();
    });
  });

  describe('authSignup', () => {
    const navigatorContext = {
      navigate: () => ({}),
    };
    const dataSignup = {
      id: '123',
      displayName: 'test',
      email: 'test@test.com',
      photoURL: 'test',
      username: 'test',
    };
    const action = {
      type: 'test',
      payload: {...dataSignup},
    };
    test('should signup user and success', () => {
      return expectSaga(sagasAuth.authSignupSaga, action)
        .provide({
          getContext(effect, next) {
            if (effect === ContextName.NAVIGATOR) {
              return navigatorContext;
            }
            return next();
          },
          call(effect, next) {
            if (effect.fn === ModelUser.createDataById) {
              return dataSignup;
            }
            return next();
          },
        })
        .put(ducksAuth.authSignupSuccess())
        .put(ducksAuth.authMeSuccess(dataSignup))
        .dispatch(ducksAuth.authSignup(dataSignup))
        .run();
    });
    test('should signup user and failed', () => {
      const error: Error = {
        name: 'error auth',
        message: 'error user auth',
      };
      return expectSaga(sagasAuth.authSignupSaga, action)
        .provide({
          getContext(effect, next) {
            if (effect === ContextName.NAVIGATOR) {
              return navigatorContext;
            }
            return next();
          },
          call(effect, next) {
            if (effect.fn === ModelUser.createDataById) {
              throw error;
            }
            return next();
          },
        })
        .put(ducksAuth.authSignupFailed(error))
        .dispatch(ducksAuth.authSignup(dataSignup))
        .run();
    });
  });
  describe('authSignout', () => {
    const navigatorContext = {
      popToTop: () => ({}),
    };
    test('should signout user and success', () => {
      return expectSaga(sagasAuth.authSignoutSaga)
        .provide({
          getContext(effect, next) {
            if (effect === ContextName.NAVIGATOR) {
              return navigatorContext;
            }
            return next();
          },
          call(effect, next) {
            if (effect.fn === signOut) {
              return true;
            }
            return next();
          },
        })
        .put(ducksAuth.authSignoutSuccess())
        .dispatch(ducksAuth.authSignout())
        .run();
    });
    test('should signout user and failed', () => {
      const error: Error = {
        name: 'error auth',
        message: 'error user auth',
      };
      return expectSaga(sagasAuth.authSignoutSaga)
        .provide({
          getContext(effect, next) {
            if (effect === ContextName.NAVIGATOR) {
              return navigatorContext;
            }
            return next();
          },
          call(effect, next) {
            if (effect.fn === signOut) {
              throw error;
            }
            return next();
          },
        })
        .put(ducksAuth.authSignoutFailed(error))
        .dispatch(ducksAuth.authSignout())
        .run();
    });
  });
});
