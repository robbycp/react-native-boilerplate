import React from 'react';

import Tabs from '~/components/basic/Tabs';

import TabCoin from './TabCoin';
import TabCrud from './TabCrud';

const ScreenFetchApiView = () => {
  return (
    <Tabs
      tabs={[
        {
          key: 'coin',
          title: 'Coin',
          scene: TabCoin,
        },
        {
          key: 'crud',
          title: 'Crud',
          scene: TabCrud,
        },
      ]}
    />
  );
};

export default ScreenFetchApiView;
