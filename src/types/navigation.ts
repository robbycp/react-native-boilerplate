export enum ScreenName {
  FLATLIST_IMAGE = 'flatlist_image',
  FORM = 'form',
  HOME = 'home',
  SPLASH = 'splash',
  MODAL_PRIVACY = 'modal_privacy',
  TERMS_CONDITION = 'terms_condition',
  WEBVIEW_GOOGLE = 'webview_google',
}

export type RootStackParamList = {
  [ScreenName.FLATLIST_IMAGE]: undefined;
  [ScreenName.FORM]: undefined;
  [ScreenName.HOME]: undefined;
  [ScreenName.MODAL_PRIVACY]: undefined;
  [ScreenName.SPLASH]: undefined;
  [ScreenName.TERMS_CONDITION]: undefined;
  [ScreenName.WEBVIEW_GOOGLE]: undefined;
};
