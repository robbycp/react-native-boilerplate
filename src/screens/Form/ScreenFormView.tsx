import React from 'react';
import {ScrollView} from 'react-native';
import {Subheading, Title, useTheme} from 'react-native-paper';
import DatetimePicker from '~/components/basic/Form/DatetimePicker';

import PickerList from '~/components/basic/Form/PickerList';
import TextInput from '~/components/basic/Form/TextInput';
import Header from '~/components/basic/Header/Header';

import {ScreenFormViewProps} from './screenFormTypes';

const list = [
  {id: '1', title: 'java', description: 'java'},
  {id: '2', title: 'javascript', description: 'javascript'},
  {id: '3', title: 'python', description: 'python'},
  {id: '4', title: 'php', description: 'php'},
  {id: '5', title: 'swift', description: 'swift'},
  {id: '6', title: 'kotlin', description: 'kotlin'},
  {id: '7', title: 'php', description: 'php'},
  {id: '8', title: 'objective-c', description: 'objective-c'},
];
const ScreenFormView = ({
  formText,
  formDate,
  formTime,
  setFormText,
  setFormDate,
  setFormTime,
}: ScreenFormViewProps) => {
  const theme = useTheme();
  const [formLanguange, setformLanguange] = React.useState({
    id: '',
    title: '',
    description: '',
  });
  return (
    <>
      <Header title="Form" />
      <ScrollView contentContainerStyle={theme.spacing.p8}>
        <PickerList
          label="Language"
          list={list}
          onChange={val => setformLanguange(val)}
          value={formLanguange}
        />
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
    </>
  );
};

export default ScreenFormView;
