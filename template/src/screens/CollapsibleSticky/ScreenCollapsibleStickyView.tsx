import React from 'react';
import {Animated, View, Text, StyleSheet} from 'react-native';
import {useCollapsibleHeader} from 'react-navigation-collapsible';
import {useTheme} from 'react-native-paper';

import CollapsibleItem from '~/components/custom/CollapsibleItem';
import Header from '~/components/basic/Header/Header';

const data = [...Array(50).keys()];

const styles = StyleSheet.create({
  animatedView: {
    position: 'absolute',
    width: '100%',
  },
  containerView: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ScreenCollapsibleStickyView = () => {
  const theme = useTheme();
  const {onScroll, containerPaddingTop, scrollIndicatorInsetTop, translateY} =
    useCollapsibleHeader({
      navigationOptions: {
        header: () => {
          return <Header title="Collapsible Sticky" withBackButton />;
        },
      },
      config: {
        collapsedColor: theme.colors.primary,
      },
    });

  const stickyHeaderHeight = 100;

  return (
    <>
      <Animated.FlatList
        data={data}
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: containerPaddingTop + stickyHeaderHeight,
        }}
        scrollIndicatorInsets={{
          top: scrollIndicatorInsetTop + stickyHeaderHeight,
        }}
        renderItem={({item}) => <CollapsibleItem item={item} />}
        keyExtractor={(item: any) => item.toString()}
      />

      {/* Sticky UI */}
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [{translateY}],
            backgroundColor: theme.colors.background,
            top: containerPaddingTop,
            height: stickyHeaderHeight,
          },
        ]}>
        <View
          style={[
            styles.containerView,
            {
              backgroundColor: theme.colors.accent,
            },
          ]}>
          <Text style={[theme.fonts.medium]}>Sticky UI</Text>
        </View>
      </Animated.View>
    </>
  );
};

export default ScreenCollapsibleStickyView;
