import {Alert, AlertButton, AlertOptions} from 'react-native';
import RNRestart from 'react-native-restart';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';

export const routingInstrumentation =
  new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: Config.SENTRY_DSN,
  debug: __DEV__,
  environment: Config.ENVIRONMENT,
  tracesSampleRate: Config.ENVIRONMENT === 'production' ? 0.2 : 1.0,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
    }),
  ],
});

interface ShowAlertInput {
  data: {
    title: string;
    message: string;
    options?: AlertOptions;
  };
  actions: AlertButton[];
}

export function showAlert(
  data: ShowAlertInput['data'],
  actions: ShowAlertInput['actions'],
) {
  Alert.alert(data.title, data.message, actions, data.options);
}

export const exceptionJSHandler = (error: Error, isFatal: boolean) => {
  Sentry.captureException(error);
  if (isFatal) {
    const actions = [
      {
        text: 'Restart',
        onPress: () => {
          RNRestart.Restart();
        },
      },
    ];
    showAlert(
      {
        title: 'Unexpected error occurred',
        message: `
        Error: ${error.name} ${error.message}
        We have reported this to our team ! Please press restart or close the App!
        `,
      },
      actions,
    );
  } else {
    // console.error(e) // So that we can see it in the ADB logs in case of Android if needed
  }
};

export const exceptionNativeHandler = () => {
  // your exception handler code here
};
