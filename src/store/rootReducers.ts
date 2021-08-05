import {combineReducers} from 'redux';

import app from '~/store/slices/app';
import auth from '~/store/slices/auth';

const rootReducers = combineReducers({
  app,
  auth,
});

export default rootReducers;
