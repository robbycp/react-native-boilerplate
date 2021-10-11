import React from 'react';
import {useNavigation} from '@react-navigation/core';

interface UseFocusProps {
  onBlur?: () => void;
  onFocus?: () => void;
}

const useFocus = ({onBlur, onFocus}: UseFocusProps) => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (onFocus) {
        onFocus();
      }
    });
    return unsubscribe;
  }, [navigation, onFocus]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      if (onBlur) {
        onBlur();
      }
    });
    return unsubscribe;
  }, [navigation, onBlur]);
};

export default useFocus;
