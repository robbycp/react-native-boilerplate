import React from 'react';
import {Animated, View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {
  CollapsibleSubHeaderAnimator,
  useCollapsibleSubHeader,
} from 'react-navigation-collapsible';
import Header from '~/components/basic/Header/Header';

import CollapsibleItem from '~/components/custom/CollapsibleItem';

const data = [...Array(50).keys()];

const styles = StyleSheet.create({
  container: {
    padding: 13,
    width: '100%',
    height: 60,
  },
  containerInput: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
});

const MySearchBar = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.primary,
        },
      ]}>
      <View style={styles.containerInput}>
        <TextInput placeholder="search here" />
      </View>
    </View>
  );
};

const ScreenCollapsibleSubHeaderView = () => {
  const {onScroll, containerPaddingTop, scrollIndicatorInsetTop, translateY} =
    useCollapsibleSubHeader({
      navigationOptions: {
        header: () => {
          return <Header title="Collapsible Sub Header" withBackButton />;
        },
      },
    });

  return (
    <>
      <Animated.FlatList
        data={data}
        onScroll={onScroll}
        contentContainerStyle={{paddingTop: containerPaddingTop}}
        scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
        renderItem={({item}) => <CollapsibleItem item={item} />}
        keyExtractor={(item: any) => item.toString()}
      />
      <CollapsibleSubHeaderAnimator translateY={translateY}>
        <MySearchBar />
      </CollapsibleSubHeaderAnimator>
    </>
  );
};

export default ScreenCollapsibleSubHeaderView;
