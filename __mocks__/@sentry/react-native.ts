class Test {
  constructor() {}
  registerNavigationContainer = jest.fn(() => ({}));
}
export const ReactNavigationInstrumentation = Test;
export const ReactNativeTracing = Test;
export const captureException = () => ({});
export const init = () => ({});
export const nativeCrash = () => ({});
export const wrap = element => element;
