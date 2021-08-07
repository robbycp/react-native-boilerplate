import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {View} from 'react-native';

import TextInput, {TextInputCustomProps} from './TextInput';

interface DateTimePickerProps {
  textInputProps?: TextInputCustomProps;
  mode: 'date' | 'time';
  onChange: (val: Date) => void;
  value: Date | undefined;
}

const format = {
  date: 'ddd DD-MMM-YYYY',
  time: 'HH:mm',
  datetime: 'ddd DD-MMM-YYYY HH:mm',
};

const DatetimePicker = ({
  textInputProps,
  mode = 'date',
  onChange,
  value,
}: DateTimePickerProps) => {
  const [isShowModal, setisShowModal] = React.useState(false);
  const handleShowModal = () => {
    setisShowModal(true);
  };
  const handleHideModal = () => {
    setisShowModal(false);
  };
  const handleConfirm = (date: Date) => {
    onChange(date);
    handleHideModal();
  };
  const dateFormat = format[mode];

  return (
    <View>
      <TextInput
        {...{
          isPressable: true,
          onPress: handleShowModal,
          nativeTextInputProps: {
            ...textInputProps?.nativeTextInputProps,
            editable: false,
            value: moment(value).format(dateFormat),
          },
        }}
      />
      <DateTimePickerModal
        date={value}
        isVisible={isShowModal}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={handleHideModal}
      />
    </View>
  );
};

export default DatetimePicker;
