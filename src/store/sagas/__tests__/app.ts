import {expectSaga} from 'redux-saga-test-plan';

import * as ducksApp from '~/store/slices/app';
import * as ducksAuth from '~/store/slices/auth';
import {ContextName} from '~/store/rootContext';

import * as sagasApp from '../app';

describe('Sagas: ', () => {
  describe('appStartCheckSaga', () => {
    const navigatorContext = {
      replace: (screenName: string) => screenName,
    };
    test('should delay and start authCheckRequest', () => {
      return expectSaga(sagasApp.appStartCheckSaga)
        .provide({
          getContext(effect, next) {
            // Check for the API call to return fake value
            if (effect === ContextName.NAVIGATOR) {
              return navigatorContext;
            }
            // Allow Redux Saga to handle other `call` effects
            return next();
          },
        })
        .delay(2000)
        .put(ducksAuth.authCheckRequest())
        .put(ducksApp.appStartCheckSuccess())
        .dispatch(ducksApp.appStartCheck())
        .run(2500);
    });
  });
});
