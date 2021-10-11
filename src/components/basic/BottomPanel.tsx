import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Divider, IconButton, Title, useTheme} from 'react-native-paper';
import {customColors} from '~/style/color';

interface Props {
  children: React.ReactElement;
  handleClose: () => void;
  height?: number | string;
  isFullScreen?: boolean;
  isVisible: boolean;
  textHeader?: string;
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerHeader: {
    borderBottomColor: customColors.grey400,
    borderBottomWidth: 2,
  },
  containerModal: {
    justifyContent: 'flex-end',
  },
  divider: {
    height: 3,
    width: '50%',
    alignSelf: 'center',
  },
  iconClose: {
    alignSelf: 'flex-end',
  },
  iconCloseNoHeader: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
  },
});

const BottomPanel = ({
  children,
  handleClose,
  height,
  isFullScreen,
  isVisible,
  textHeader,
}: Props) => {
  const theme = useTheme();
  const closeButton = (
    <IconButton
      icon="close"
      color={theme.colors.custom.red500}
      size={30}
      onPress={handleClose}
      style={styles.iconClose}
    />
  );
  let heightBottomPanel = {};
  if (isFullScreen) {
    heightBottomPanel = {height: '100%'};
  } else if (height) {
    heightBottomPanel = {height};
  }
  return (
    <Modal
      animationIn="slideInUp"
      onBackButtonPress={handleClose}
      onBackdropPress={handleClose}
      onModalHide={handleClose}
      onSwipeCancel={handleClose}
      isVisible={isVisible}
      propagateSwipe
      style={[theme.spacing.m0, styles.containerModal]}>
      <View
        style={[
          styles.container,
          theme.layout.backgroundWhite,
          theme.spacing.pb24,
          heightBottomPanel,
        ]}>
        <Divider style={[theme.spacing.m4, styles.divider]} />
        {textHeader ? (
          <View
            style={[
              theme.spacing.pb4,
              theme.spacing.pl16,
              theme.spacing.pr8,
              theme.spacing.pt4,
              theme.layout.rowCenter,
              styles.containerHeader,
            ]}>
            <Title style={[theme.layout.scrollSpaceAround]}>{textHeader}</Title>
            {closeButton}
          </View>
        ) : (
          <View style={styles.iconCloseNoHeader}>{closeButton}</View>
        )}
        {children}
      </View>
    </Modal>
  );
};

export default BottomPanel;
