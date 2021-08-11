import React from 'react';
import {View, Text} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const NetworkReadView = () => {
  const netState = useNetInfo();
  return (
    <View>
      <Text>{netState.isConnected ? 'Connected' : 'No connection'}</Text>
    </View>
  );
};

export default NetworkReadView;
