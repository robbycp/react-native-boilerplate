import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {snackbarShow} from '~/store/slices/snackbar';

const SnackbarHomeView = () => {
  const dispatch = useDispatch();
  const dispatchSnackbarShowError = () => {
    dispatch(
      snackbarShow({
        message: 'Error',
        type: 'error',
      }),
    );
  };
  const dispatchSnackbarShowSuccess = () => {
    dispatch(
      snackbarShow({
        message: 'Success',
        type: 'success',
      }),
    );
  };
  const dispatchSnackbarShowInfo = () => {
    dispatch(
      snackbarShow({
        message: 'Info',
        duration: 1000,
      }),
    );
  };
  return (
    <View>
      <Button onPress={dispatchSnackbarShowError}>Error (7s)</Button>
      <Button onPress={dispatchSnackbarShowSuccess}>Success (7s)</Button>
      <Button onPress={dispatchSnackbarShowInfo}>Info (1s)</Button>
    </View>
  );
};

export default SnackbarHomeView;
