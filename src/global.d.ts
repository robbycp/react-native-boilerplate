declare global {
  interface window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }

  interface RemoteConfigValue {
    source: string;
    value: string | boolean | number;
  }
  namespace ReactNativePaper {
    interface ThemeColors {
      // myOwnColor: string;
    }

    interface Theme {
      card: {
        borderRadius: number;
        elevation: number;
      };
    }
  }
}

export {};
