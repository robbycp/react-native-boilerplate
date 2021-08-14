import {combineReducers} from 'redux';

import app from '~/store/slices/app';
import auth from '~/store/slices/auth';
import common from '~/store/slices/common';

const rootReducers = combineReducers({
  app,
  auth,
  common,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
