import React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';

import TextInput from '~/components/basic/Form/TextInput';

import {ScreenFormViewProps} from './screenFormTypes';

const ScreenFormView = ({formText, setFormText}: ScreenFormViewProps) => {
  return (
    <View>
      <Title>Normal</Title>
      <TextInput
        textInputProps={{
          label: 'Text',
          value: formText,
          onChangeText: setFormText,
        }}
      />
      <TextInput
        textInputProps={{
          label: 'Number',
          value: formText,
          textContentType: 'telephoneNumber',
          onChangeText: setFormText,
        }}
      />
      <Title>With Helper</Title>
      <TextInput
        isShowHelper
        helperMode="info"
        textHelper="Please input your name"
        textInputProps={{
          label: 'Text',
          value: formText,
          onChangeText: setFormText,
        }}
        withHelperText
      />
      <TextInput
        isShowHelper
        helperMode="error"
        textHelper="Wrong input"
        textInputProps={{
          label: 'Text',
          value: formText,
          onChangeText: setFormText,
        }}
        withHelperText
      />
      <Title>Input mode: secure</Title>
      <TextInput
        textInputMode="secure"
        textInputProps={{
          label: 'Text',
          value: formText,
          onChangeText: setFormText,
        }}
      />
      <Title>Input mode: clear</Title>
      <TextInput
        textInputMode="clear"
        textInputProps={{
          label: 'Text',
          value: formText,
          onChangeText: setFormText,
        }}
      />
    </View>
  );
};

export default ScreenFormView;
