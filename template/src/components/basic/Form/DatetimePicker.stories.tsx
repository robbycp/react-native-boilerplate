import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';

import DatetimePicker from './DatetimePicker';

storiesOf('DatetimePicker', module)
  .add(
    'default / mode date',
    () => (
      <DatetimePicker
        textInputProps={{
          nativeTextInputProps: {
            label: text('label', 'Birthday'),
          },
        }}
        onChange={action('on confirm date')}
        value={text('value', '2021-09-01')}
      />
    ),
    {
      notes: `
      # Description

      Component DatetimePicker, using 'react-native-modal-datetime-picker'
      This component can only be used in android and ios.
      More info about the package https://github.com/mmazzarolo/react-native-modal-datetime-picker
    `,
    },
  )
  .add('time', () => (
    <DatetimePicker
      textInputProps={{
        nativeTextInputProps: {
          label: text('label', 'Birthday'),
        },
      }}
      mode="time"
      onChange={action('on confirm date')}
      value={text('value', '2021-09-01 19:00')}
    />
  ))
  .add('datetime', () => (
    <DatetimePicker
      textInputProps={{
        nativeTextInputProps: {
          label: text('label', 'Birthday'),
        },
      }}
      mode="datetime"
      onChange={action('on confirm date')}
      value={text('value', '2021-09-01 19:00')}
    />
  ));
