import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Subheading, Title} from 'react-native-paper';
import DatetimePicker from '~/components/basic/Form/DatetimePicker';

import TextInput from '~/components/basic/Form/TextInput';

import {ScreenFormViewProps} from './screenFormTypes';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
});

const ScreenFormView = ({
  formText,
  formDate,
  formTime,
  setFormText,
  setFormDate,
  setFormTime,
}: ScreenFormViewProps) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Text Input</Title>
      <Subheading>Normal</Subheading>
      <TextInput
        nativeTextInputProps={{
          label: 'Text',
          value: formText,
          onChangeText: setFormText,
        }}
      />
      <TextInput
        nativeTextInputProps={{
          label: 'Number',
          value: formText,
          textContentType: 'telephoneNumber',
          onChangeText: setFormText,
        }}
      />
      <Subheading>With Helper</Subheading>
      <TextInput
        isShowHelper
        helperMode="info"
        textHelper="Please input your name"
        nativeTextInputProps={{
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
        nativeTextInputProps={{
          label: 'Text',
          value: formText,
          onChangeText: setFormText,
        }}
        withHelperText
      />
      <Subheading>Input mode: secure</Subheading>
      <TextInput
        textInputMode="secure"
        nativeTextInputProps={{
          label: 'Text',
          value: formText,
          onChangeText: setFormText,
        }}
      />
      <Subheading>Input mode: clear</Subheading>
      <TextInput
        textInputMode="clear"
        nativeTextInputProps={{
          label: 'Text',
          value: formText,
          onChangeText: setFormText,
        }}
      />
      <Title>Datetime picker</Title>
      <Subheading>Date</Subheading>
      <DatetimePicker
        mode="date"
        onChange={val => setFormDate(val)}
        value={formDate}
      />
      <Subheading>Time</Subheading>
      <DatetimePicker
        mode="time"
        onChange={val => setFormTime(val)}
        value={formTime}
      />
    </ScrollView>
  );
};

export default ScreenFormView;
