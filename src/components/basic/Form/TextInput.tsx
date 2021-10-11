import React from 'react';
import {
  Pressable,
  View,
  TextInput as RNTextInput,
  GestureResponderEvent,
} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

const TEXTINPUT_MODE = 'outlined';

type RNTextInputProps = React.ComponentProps<typeof TextInput>;

export type TextInputCustomProps = {
  isShowHelper?: boolean;
  helperMode?: 'error' | 'info';
  onClear?: () => void;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  textInputMode?: 'secure' | 'clear';
  nativeTextInputProps: RNTextInputProps;
  textHelper?: string;
  withClearButton?: boolean;
  withSecureButton?: boolean;
  withHelperText?: boolean;
};

const TextInputCustom = ({
  isShowHelper,
  helperMode = 'info',
  onClear = () => {},
  onPress,
  textInputMode,
  nativeTextInputProps,
  textHelper,
  withHelperText,
}: TextInputCustomProps) => {
  const {onChangeText = () => {}, value} = nativeTextInputProps;
  const [isSecure, setisSecure] = React.useState(false);
  const textInputRef = React.useRef<RNTextInput>(null);
  const onPressClear = () => {
    onClear();
    textInputRef.current?.focus();
    onChangeText('');
  };
  const onPressSecure = () => {
    setisSecure(!isSecure);
  };
  let right = null;
  if (textInputMode === 'secure') {
    right = (
      <TextInput.Icon
        onPress={onPressSecure}
        name={isSecure ? 'eye-off' : 'eye'}
      />
    );
  } else if (textInputMode === 'clear') {
    right = value !== '' && (
      <TextInput.Icon onPress={onPressClear} name="window-close" />
    );
  }

  const propsTextInput = {
    ...nativeTextInputProps,
    onChangeText,
    right,
    value,
  };

  if (textInputMode === 'secure') {
    propsTextInput.textContentType = 'password';
    propsTextInput.secureTextEntry = isSecure;
  }

  const renderTextInput = onPress ? (
    <View pointerEvents="none">
      <TextInput {...propsTextInput} mode={TEXTINPUT_MODE} />
    </View>
  ) : (
    <TextInput mode={TEXTINPUT_MODE} {...propsTextInput} />
  );

  return (
    <Pressable onPress={onPress}>
      {renderTextInput}
      {withHelperText && (
        <HelperText type={helperMode} visible={isShowHelper}>
          {textHelper}
        </HelperText>
      )}
    </Pressable>
  );
};

export default TextInputCustom;
