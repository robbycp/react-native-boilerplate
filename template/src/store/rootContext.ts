import * as navigator from '~/navigation/navigator';
import * as remoteConfig from '~/services/firebaseRemoteConfig';
import * as versionUpdate from '~/utils/versionUpdate';

export enum ContextName {
  NAVIGATOR = 'navigator',
  REMOTE_CONFIG = 'remoteConfig',
  VERSION_UPDATE = 'versionUpdate',
}

const rootContext = {
  [ContextName.NAVIGATOR]: navigator,
  [ContextName.REMOTE_CONFIG]: remoteConfig,
  [ContextName.VERSION_UPDATE]: versionUpdate,
};

export type RootContext = typeof rootContext;

export default rootContext;
