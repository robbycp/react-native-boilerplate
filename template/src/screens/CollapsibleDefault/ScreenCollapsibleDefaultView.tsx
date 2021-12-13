import React from 'react';
import {Animated} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useCollapsibleHeader} from 'react-navigation-collapsible';
import Header from '~/components/basic/Header/Header';
import CollapsibleItem from '~/components/custom/CollapsibleItem';

const data = [...Array(50).keys()];

const ScreenCollapsibleDefaultView = () => {
  const theme = useTheme();
  const {onScroll, containerPaddingTop, scrollIndicatorInsetTop} =
    useCollapsibleHeader({
      navigationOptions: {
        header: () => {
          return <Header title="Collapsible Default" withBackButton />;
        },
        config: {
          collapsedColor: theme.colors.primary,
          disableOpacity: true,
        },
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

export default ScreenCollapsibleDefaultView;
