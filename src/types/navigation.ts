export enum ScreenName {
  ADS_LIST = 'Ads List',
  FLATLIST_IMAGE = 'Flatlist Image',
  FORM = 'Form',
  HOME = 'Home',
  SPLASH = 'Splash',
  MODAL_PRIVACY = 'Privacy',
  TABS = 'Tabs',
  TERMS_CONDITION = 'Terms Condition',
  WEBVIEW_GOOGLE = 'Webview Google',
}

export type RootStackParamList = {
  [ScreenName.ADS_LIST]: undefined;
  [ScreenName.FLATLIST_IMAGE]: undefined;
  [ScreenName.FORM]: undefined;
  [ScreenName.HOME]: undefined;
  [ScreenName.MODAL_PRIVACY]: undefined;
  [ScreenName.SPLASH]: undefined;
  [ScreenName.TABS]: undefined;
  [ScreenName.TERMS_CONDITION]: undefined;
  [ScreenName.WEBVIEW_GOOGLE]: undefined;
};
