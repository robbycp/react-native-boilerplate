export enum ScreenName {
  FLATLIST_IMAGE = 'flatlist_image',
  FORM = 'form',
  HOME = 'home',
  SPLASH = 'splash',
  WEBVIEW_GOOGLE = 'webview_google',
}

export type RootStackParamList = {
  [ScreenName.FLATLIST_IMAGE]: undefined;
  [ScreenName.FORM]: undefined;
  [ScreenName.HOME]: undefined;
  [ScreenName.SPLASH]: undefined;
  [ScreenName.WEBVIEW_GOOGLE]: undefined;
};
