import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal, useTheme} from 'react-native-paper';
import LottieView from 'lottie-react-native';

interface LoadingOverlayProps {
  isVisible: boolean;
}
const styles = StyleSheet.create({
  loadingContent: {
    width: 200,
    height: 200,
  },
});

const LoadingOverlay = ({isVisible}: LoadingOverlayProps) => {
  const theme = useTheme();
  if (!isVisible) {
    return null;
  }
  return (
    <Portal>
      <Modal visible contentContainerStyle={[theme.layout.center]}>
        <View style={[styles.loadingContent]}>
          <LottieView
            source={require('~/assets/animations/71696-dolphin.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>
    </Portal>
  );
};

export default LoadingOverlay;
