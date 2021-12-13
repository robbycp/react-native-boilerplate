import Config from 'react-native-config';
import {call, delay, getContext, put} from 'redux-saga/effects';
import {Platform} from 'react-native';
import type {
  AndroidUpdateType,
  NeedsUpdateResponse,
  StartUpdateOptions,
} from 'sp-react-native-in-app-updates';
import {getVersion} from 'react-native-device-info';

import {authCheckRequest} from '~/store/slices/auth';
import {appStartCheckSuccess} from '~/store/slices/app';
import {ContextName, RootContext} from '~/store/rootContext';
import {RemoteConfigKeys} from '~/services/firebaseRemoteConfig';
import {showAlertRestart} from '~/utils/errorHandler';

export function* appStartCheckSaga() {
  try {
    const navigator: RootContext[ContextName.NAVIGATOR] = yield getContext(
      ContextName.NAVIGATOR,
    );

    if (Config.WITH_APP_VERSION_CHECK === 'true') {
      const remoteConfig: RootContext[ContextName.REMOTE_CONFIG] =
        yield getContext(ContextName.REMOTE_CONFIG);

      const {
        checkVersionUpdate,
        inAppUpdates,
        UpdateType,
      }: RootContext[ContextName.VERSION_UPDATE] = yield getContext(
        ContextName.VERSION_UPDATE,
      );

      const updateAppType: {value: AndroidUpdateType} = yield call(
        remoteConfig.getValue,
        RemoteConfigKeys.UPDATE_APP_TYPE,
      );
      const versionNumber: string = yield call(getVersion);
      console.info('[app] versionNumber', versionNumber);
      console.info('[app] updateAppType', updateAppType);
      const result: NeedsUpdateResponse = yield call(
        checkVersionUpdate,
        versionNumber,
      );

      if (result.shouldUpdate) {
        let updateOptions: StartUpdateOptions = {};
        if (Platform.OS === 'android') {
          // android only, on iOS the user will be promped to go to your app store page
          updateOptions = {
            updateType:
              updateAppType.value === UpdateType.FLEXIBLE
                ? UpdateType.FLEXIBLE
                : UpdateType.IMMEDIATE,
          };
        }
        inAppUpdates.startUpdate(updateOptions); // https://github.com/SudoPlz/sp-react-native-in-app-updates/blob/master/src/types.ts#L78
      }
    } else {
      yield delay(2000);
    }
    yield put(authCheckRequest());
    yield put(appStartCheckSuccess());
    navigator.replace('Home');
  } catch (error) {
    console.log('[error appstartcheck] ', error);
    showAlertRestart();
  }
}
