import React from 'react';
import {Pressable, View, TextInput as RNTextInput} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

const TEXTINPUT_MODE = 'outlined';

type RNTextInputProps = React.ComponentProps<typeof TextInput>;

type TextInputCustomProps = {
  isPressable?: boolean;
  isShowHelper?: boolean;
  helperMode?: 'error' | 'info';
  onClear?: () => void;
  onPress?: () => void;
  textInputMode?: 'secure' | 'clear';
  textInputProps: RNTextInputProps;
  textHelper?: string;
  withClearButton?: boolean;
  withSecureButton?: boolean;
  withHelperText?: boolean;
};

const TextInputCustom = ({
  isPressable,
  isShowHelper,
  helperMode = 'info',
  onClear = () => {},
  onPress,
  textInputMode,
  textInputProps,
  textHelper,
  withHelperText,
}: TextInputCustomProps) => {
  const {onChangeText = () => {}, value} = textInputProps;
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
    ...textInputProps,
    onChangeText,
    right,
    value,
  };

  if (textInputMode === 'secure') {
    propsTextInput.textContentType = 'password';
    propsTextInput.secureTextEntry = isSecure;
  }

  const renderTextInput = isPressable ? (
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
