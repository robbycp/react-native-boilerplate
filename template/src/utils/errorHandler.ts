import {Alert, AlertButton, AlertOptions} from 'react-native';
import RNRestart from 'react-native-restart';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';
import i18n from '~/translations';

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

const restartActions = [
  {
    text: 'Restart',
    onPress: () => {
      RNRestart.Restart();
    },
  },
];

export function showAlert(
  data: ShowAlertInput['data'],
  actions: ShowAlertInput['actions'],
) {
  Alert.alert(data.title, data.message, actions, data.options);
}

export const showAlertRestart = () => {
  showAlert(
    {
      title: i18n.t('errorMessage.fatal.title'),
      message: i18n.t('errorMessage.fatal.message'),
    },
    restartActions,
  );
};

export const exceptionJSHandler = (error: Error, isFatal: boolean) => {
  Sentry.captureException(error);
  if (isFatal) {
    showAlert(
      {
        title: 'Unexpected error occurred',
        message: `
        Error: ${error.name} ${error.message}
        We have reported this to our team ! Please press restart or close the App!
        `,
      },
      restartActions,
    );
  } else {
    // console.error(e) // So that we can see it in the ADB logs in case of Android if needed
  }
};

export const exceptionNativeHandler = () => {
  // your exception handler code here
};
