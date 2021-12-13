import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider, List} from 'react-native-paper';

interface Props {
  item: number;
}

const styles = StyleSheet.create({
  divider: {height: 3},
});

const CollapsibleItemView = ({item}: Props) => {
  return (
    <>
      <List.Item key={`${item}-text`} title={item} />
      <Divider key={`${item}-divider`} style={styles.divider} />
    </>
  );
};

export default CollapsibleItemView;
