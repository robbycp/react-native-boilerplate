import {Alert, DevSettings} from 'react-native';

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
    console.log(error); // So that we can see it in the ADB logs in case of Android if needed
  }
};

export const exceptionNativeHandler = () => {
  // your exception handler code here
};
