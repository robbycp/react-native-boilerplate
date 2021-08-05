declare global {
  interface window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
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
