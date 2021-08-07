export enum ScreenName {
  FORM = 'form',
  HOME = 'home',
  SPLASH = 'splash',
  WEBVIEW_GOOGLE = 'webview_google',
}

export type RootStackParamList = {
  [ScreenName.FORM]: undefined;
  [ScreenName.HOME]: undefined;
  [ScreenName.SPLASH]: undefined;
  [ScreenName.WEBVIEW_GOOGLE]: undefined;
};
