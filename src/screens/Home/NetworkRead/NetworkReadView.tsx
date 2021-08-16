import React from 'react';
import {View, Text} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {useTranslation} from 'react-i18next';

const NetworkReadView = () => {
  const netState = useNetInfo();
  const {t} = useTranslation();
  return (
    <View>
      <Text>
        {netState.isConnected
          ? `${t('homeNetwork.connected')}`
          : `${t('homeNetwork.noConnection')}`}
      </Text>
    </View>
  );
};

export default NetworkReadView;
