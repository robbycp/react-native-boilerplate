export enum ScreenName {
  HOME = 'home',
  SPLASH = 'splash',
  WEBVIEW_GOOGLE = 'webview_google',
}

export type RootStackParamList = {
  [ScreenName.HOME]: undefined;
  [ScreenName.SPLASH]: undefined;
  [ScreenName.WEBVIEW_GOOGLE]: undefined;
};
