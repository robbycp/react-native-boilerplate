import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

import rootReducers from '~/store/rootReducers';
import sagas from '~/store/rootSagas';
import rootContext from '~/store/rootContext';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: __DEV__, //to get useful logging
};

export default () => {
  const sagaMiddleware = createSagaMiddleware({
    context: {...rootContext},
  });

  const persistedReducer = persistReducer(persistConfig, rootReducers);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([sagaMiddleware]),
  });

  let persistor = persistStore(store);

  sagaMiddleware.run(sagas);
  return {persistor, store};
};
