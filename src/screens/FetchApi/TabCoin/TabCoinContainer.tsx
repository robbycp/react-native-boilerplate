import React from 'react';
import apiCoinCap from '~/services/api/apiCoinCap';

import TabCoinView, {Asset} from './TabCoinView';

const TabCoinContainer = () => {
  const [dataAssets, setDataAssets] = React.useState<Asset[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const dataCoin = await apiCoinCap.getAssets({
        query: {
          search: '',
          ids: '',
          limit: '',
          offset: '',
        },
      });
      console.log('data coin', dataCoin);
      setDataAssets(dataCoin.data.data as Asset[]);
    };
    fetchData();
  }, []);

  const propsView = {
    dataAssets,
  };
  return <TabCoinView {...propsView} />;
};

export default TabCoinContainer;
