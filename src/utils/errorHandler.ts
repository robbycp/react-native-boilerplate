import {Alert, DevSettings} from 'react-native';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';

export const routingInstrumentation =
  new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: Config.SENTRY_DSN,
  debug: __DEV__,
  environment: Config.ENVIRONMENT,
  tracesSampleRate: Config.ENVIRONMENT === 'staging' ? 1.0 : 0.2,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
    }),
  ],
});

export const exceptionJSHandler = (error: Error, isFatal: boolean) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${error.name} ${error.message}

        We will need to restart the app.
        `,
      [
        {
          text: 'Restart',
          onPress: () => {
            DevSettings.reload();
          },
        },
      ],
    );
  } else {
    Sentry.captureException(error);
    console.log(error); // So that we can see it in the ADB logs in case of Android if needed
  }
};

export const exceptionNativeHandler = () => {
  // your exception handler code here
};
