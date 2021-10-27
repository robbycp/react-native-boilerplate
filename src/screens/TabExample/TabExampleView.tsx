import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import Tabs from '~/components/basic/Tabs';

const styles = StyleSheet.create({
  containerFirst: {height: 200, backgroundColor: '#ff4081'},
  containerSecond: {height: 300, backgroundColor: '#673ab7'},
  containerTabs: {height: 300},
});

const FirstRoute = () => <View style={styles.containerFirst} />;

const SecondRoute = () => <View style={styles.containerSecond} />;

const TabExampleView = () => {
  return (
    <>
      <View style={styles.containerTabs}>
        <Tabs
          tabs={[
            {
              key: 'first',
              title: 'First',
              scene: FirstRoute,
            },
            {
              key: 'second',
              title: 'Second',
              scene: SecondRoute,
            },
          ]}
        />
      </View>
      <Text>Below Text</Text>
    </>
  );
};

export default TabExampleView;
