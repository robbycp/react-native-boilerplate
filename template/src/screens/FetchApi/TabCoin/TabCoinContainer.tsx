import React from 'react';
import {useCoincapGet} from '~/hooks/dataState/coincap.hooks';

import TabCoinView from './TabCoinView';

const TabCoinContainer = () => {
  const {data, isLoading} = useCoincapGet();

  const propsView = {
    data: data?.data.data,
    isLoading,
  };
  return <TabCoinView {...propsView} />;
};

export default TabCoinContainer;
