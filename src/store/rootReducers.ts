import {combineReducers} from 'redux';

import app from '~/store/slices/app';
import auth from '~/store/slices/auth';
import common from '~/store/slices/common';
import snackbar from '~/store/slices/snackbar';

const rootReducers = combineReducers({
  app,
  auth,
  common,
  snackbar,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
