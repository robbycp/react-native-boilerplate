import {combineReducers} from 'redux';

import app from '~/store/slices/app';
import auth from '~/store/slices/auth';

const rootReducers = combineReducers({
  app,
  auth,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
