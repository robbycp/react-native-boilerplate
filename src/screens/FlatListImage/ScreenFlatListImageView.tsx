import React from 'react';
import type {ListRenderItem} from 'react-native';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import FastImageCustom from '~/components/basic/FastImage';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    marginBottom: 10,
    height: 200,
    width: '100%',
  },
});

const renderItem: ListRenderItem<number> = ({item}) => (
  <FastImageCustom
    key={item}
    style={styles.image}
    source={{
      uri: 'https://source.unsplash.com/1600x900/?cat,dog,animals',
    }}
  />
);

const ScreenFlatListImageView = () => {
  const data = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text>Fast Image</Text>
        </View>
      }
    />
  );
};

export default ScreenFlatListImageView;
