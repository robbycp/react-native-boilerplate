import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import LottieView from 'lottie-react-native';

interface Props {
  children: React.ReactElement;
  isVisible: boolean;
}

// Change LottieView with other animation or use default ActivityIndicator
const LoadingContent = ({isVisible, children}: Props) => {
  const theme = useTheme();
  if (!isVisible) {
    return children;
  }
  return (
    <View style={[theme.layout.center, theme.layout.fullSize]}>
      <LottieView
        source={require('~/assets/animations/71696-dolphin.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingContent;
