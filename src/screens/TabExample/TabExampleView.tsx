import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import Header from '~/components/basic/Header/Header';
import Tabs from '~/components/basic/Tabs';

const styles = StyleSheet.create({
  containerFirst: {height: 200, backgroundColor: '#ff4081'},
  containerSecond: {height: 300, backgroundColor: '#673ab7'},
  containerTabs: {height: 300},
});

const FirstRoute = () => <View style={styles.containerFirst} />;

const SecondRoute = () => <View style={styles.containerSecond} />;

const TabExampleView = () => {
  const keysScene = {
    first: FirstRoute,
    second: SecondRoute,
  };
  return (
    <>
      <Header title="Tabs Example" />
      <View style={styles.containerTabs}>
        <Tabs keysScene={keysScene} />
      </View>
      <Text>Below Text</Text>
    </>
  );
};

export default TabExampleView;
