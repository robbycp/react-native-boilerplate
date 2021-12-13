import SpInAppUpdates, {
  IAUUpdateKind,
  NeedsUpdateResponse,
} from 'sp-react-native-in-app-updates';

export const UpdateType = IAUUpdateKind;

export const inAppUpdates = new SpInAppUpdates(__DEV__);

export const checkVersionUpdate = async (
  curVersion: string,
): Promise<NeedsUpdateResponse> => {
  // curVersion is optional if you don't provide it will automatically take from the app using react-native-device-info
  return await inAppUpdates.checkNeedsUpdate({curVersion});
};
