export enum ScreenName {
  HOME = 'home',
  SPLASH = 'splash',
}

export type RootStackParamList = {
  [ScreenName.HOME]: undefined;
  [ScreenName.SPLASH]: undefined;
};
