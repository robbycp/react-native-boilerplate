import React from 'react';
import {Animated, Image, ImageBackground, StyleSheet, View} from 'react-native';
import {Avatar, Title, useTheme} from 'react-native-paper';
import {useCollapsibleHeader} from 'react-navigation-collapsible';

import Header from '~/components/basic/Header/Header';
import CollapsibleItem from '~/components/custom/CollapsibleItem';

const data = [...Array(50).keys()];

const styles = StyleSheet.create({
  containerHeader: {
    height: 250,
  },
  image: {
    flex: 1,
  },
});

const ScreenCollapsibleBackgroundView = () => {
  const theme = useTheme();
  const {onScroll, containerPaddingTop, scrollIndicatorInsetTop} =
    useCollapsibleHeader({
      navigationOptions: {
        header: () => {
          return (
            <View style={styles.containerHeader}>
              <Header title="Collapsible Background" />
              <ImageBackground
                source={{
                  uri: 'https://artwork.wallartprints.com/media/catalog/category/mountain-pictures.jpg',
                }}
                style={[styles.image, theme.layout.center]}>
                <View>
                  <Avatar.Image
                    size={100}
                    source={{uri: 'https://source.unsplash.com/400x400/?man'}}
                  />
                  <Title>Robbycp</Title>
                </View>
              </ImageBackground>
            </View>
          );
        },
        // headerShown: false,
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
