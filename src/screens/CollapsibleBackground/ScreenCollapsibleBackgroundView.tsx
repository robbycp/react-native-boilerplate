import React from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useCollapsibleHeader} from 'react-navigation-collapsible';

import CollapsibleItem from '~/components/custom/CollapsibleItem';

const data = [...Array(50).keys()];

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

const ScreenCollapsibleBackgroundView = () => {
  const theme = useTheme();
  const {onScroll, containerPaddingTop, scrollIndicatorInsetTop} =
    useCollapsibleHeader({
      navigationOptions: {
        headerStyle: {
          height: 250,
        },
        headerBackground: (
          <Image
            source={{
              uri: 'https://artwork.wallartprints.com/media/catalog/category/mountain-pictures.jpg',
            }}
            style={styles.image}
          />
        ),
      },
      config: {
        collapsedColor: theme.colors.primary,
      },
    });

  return (
    <Animated.FlatList
      data={data}
      onScroll={onScroll}
      contentContainerStyle={{paddingTop: containerPaddingTop}}
      scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
      renderItem={({item}) => <CollapsibleItem item={item} />}
      keyExtractor={(item: any) => item.toString()}
    />
  );
};

export default ScreenCollapsibleBackgroundView;
