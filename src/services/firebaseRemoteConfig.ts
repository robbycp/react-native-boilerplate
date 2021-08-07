import remoteConfig from '@react-native-firebase/remote-config';

const FIREBASE_REMOTE_CONFIG_CACHE_TIME = __DEV__ ? 1 : 3600;

export enum RemoteConfigKeys {
  AWESOME_NEW_FEATURE = 'awesome_new_feature',
}

export const DEFAULT_VALUE = {
  [RemoteConfigKeys.AWESOME_NEW_FEATURE]: 'disabled',
};

export async function fetchRemoteConfig() {
  try {
    await remoteConfig().setDefaults(DEFAULT_VALUE);
    await remoteConfig().fetch(+FIREBASE_REMOTE_CONFIG_CACHE_TIME);
    const fetchedRemotely = await remoteConfig().activate();
    if (fetchedRemotely) {
      console.info('Configs were retrieved from the backend and activated.');
    } else {
      console.info(
        'No configs were fetched from the backend, and the local configs were already activated',
      );
    }
  } catch (error) {
    console.info('error', error);
  }
}

export function getValue(key: RemoteConfigKeys): RemoteConfigValue {
  const value = remoteConfig().getValue(key);
  const returnValue: RemoteConfigValue = {
    source: value.getSource(),
    value: '',
  };
  if (typeof DEFAULT_VALUE[key] === 'string') {
    returnValue.value = value.asString();
  } else if (typeof DEFAULT_VALUE[key] === 'number') {
    returnValue.value = value.asNumber();
  } else if (typeof DEFAULT_VALUE[key] === 'boolean') {
    returnValue.value = value.asBoolean();
  }
  return returnValue;
}
