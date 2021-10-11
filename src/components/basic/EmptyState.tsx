import React from 'react';
import {View} from 'react-native';
import {Subheading, Title, Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

interface Props {
  children: React.ReactElement;
  isVisible: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  title: string;
  subtitle?: string;
  textButtonCancel?: string;
  textButtonSubmit: string;
}

const EmptyState = ({
  children,
  isVisible,
  onCancel = () => ({}),
  onSubmit = () => ({}),
  title,
  subtitle = '',
  textButtonCancel,
  textButtonSubmit = 'Submit',
}: Props) => {
  const theme = useTheme();
  if (!isVisible) {
    return children;
  }
  return (
    <View style={[theme.layout.center, theme.layout.fullSize]}>
      <View>
        <Title style={theme.layout.textCenter}>{title}</Title>
        {!!subtitle && (
          <Subheading style={[theme.spacing.mt8, theme.layout.textCenter]}>
            {subtitle}
          </Subheading>
        )}
        <View style={[theme.layout.row, theme.spacing.mt16]}>
          {!!textButtonCancel && (
            <Button
              mode="outlined"
              onPress={onCancel}
              style={[theme.layout.fill]}>
              {textButtonCancel}
            </Button>
          )}
          {!!textButtonSubmit && (
            <Button
              mode="contained"
              onPress={onSubmit}
              style={[theme.layout.fill]}>
              {textButtonSubmit}
            </Button>
          )}
        </View>
      </View>
    </View>
  );
};

export default EmptyState;
