import React from 'react';
import {FlatList, View} from 'react-native';
import {List, RadioButton} from 'react-native-paper';

import BottomPanel from '~/components/basic/BottomPanel';
import TextInput, {TextInputCustomProps} from './TextInput';
import {ListRenderItem} from 'react-native';

interface PickerItem {
  id: string;
  title: string;
  description?: string;
  value: string | number;
}
interface PickerListProps {
  label: string;
  onChange: (item: PickerItem) => void;
  list: PickerItem[];
  propsTextInput?: TextInputCustomProps;
  value: PickerItem;
}
const PickerList = ({
  label,
  onChange,
  propsTextInput,
  value,
  list,
}: PickerListProps) => {
  const [isShowBottom, setisShowBottom] = React.useState(false);
  const handleShowBottom = () => {
    setisShowBottom(true);
  };
  const handleHideBottom = () => {
    setisShowBottom(false);
  };
  const onPressItem = (item: PickerItem) => {
    onChange(item);
    handleHideBottom();
  };
  const renderItem: ListRenderItem<PickerItem> = ({item}) => (
    <List.Item
      onPress={() => onPressItem(item)}
      title={item.title}
      description={item.description}
      left={props => (
        <RadioButton.Android
          {...props}
          value={value.id}
          status={value.id === item.id ? 'checked' : 'unchecked'}
        />
      )}
    />
  );
  const newPropsTextInput = {
    ...propsTextInput,
    label,
    editable: false,
    isPressable: true,
    value: value.title,
  };
  return (
    <View>
      <TextInput
        onPress={handleShowBottom}
        nativeTextInputProps={newPropsTextInput}
      />
      <BottomPanel
        isVisible={isShowBottom}
        handleClose={handleHideBottom}
        height={'50%'}
        textHeader={label}>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </BottomPanel>
    </View>
  );
};

export default PickerList;
