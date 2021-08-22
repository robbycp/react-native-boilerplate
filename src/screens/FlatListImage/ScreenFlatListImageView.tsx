import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import FastImageCustom from '~/components/basic/FastImage';
import Header from '~/components/basic/Header/Header';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },
});

const ScreenFlatListImageView = () => {
  const data = [0, 1, 2, 3, 4, 5, 6, 7];
  const theme = useTheme();
  const {t} = useTranslation();
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <FastImageCustom
          key={item}
          style={[styles.image, theme.spacing.mb8]}
          source={{
            uri: 'https://source.unsplash.com/1600x900/?cat,dog,animals',
          }}
        />
      )}
      ListHeaderComponent={
        <View style={theme.spacing.p8}>
          <Text>{t('flatlistImage.fastImage')}</Text>
        </View>
      }
    />
  );
};

export default ScreenFlatListImageView;
