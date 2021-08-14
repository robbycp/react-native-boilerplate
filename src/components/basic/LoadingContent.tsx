import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, useTheme} from 'react-native-paper';

interface Props {
  children: React.ReactElement;
  isVisible: boolean;
}

const LoadingContent = ({isVisible, children}: Props) => {
  const theme = useTheme();
  if (isVisible) {
    return children;
  }
  return (
    <View style={[theme.layout.center, theme.layout.fullSize]}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingContent;
