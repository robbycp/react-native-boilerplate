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
      <Button mode="text" onPress={dispatchSnackbarShowError}>
        Error (7s) btn_text
      </Button>
      <Button mode="outlined" onPress={dispatchSnackbarShowSuccess}>
        Success (7s) btn_outlined
      </Button>
      <Button mode="contained" onPress={dispatchSnackbarShowInfo}>
        Info (1s) btn_contained
      </Button>
    </View>
  );
};

export default SnackbarHomeView;
