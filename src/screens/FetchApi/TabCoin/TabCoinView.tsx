import React from 'react';
import {FlatList} from 'react-native';
import {Card, Paragraph, useTheme} from 'react-native-paper';

export interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}
interface Props {
  dataAssets: Asset[];
}

const TabCoinView = ({dataAssets}: Props) => {
  const theme = useTheme();
  return (
    <FlatList
      data={dataAssets}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => (
        <Card mode="elevated" style={theme.spacing.mb8}>
          <Card.Title title={`${item.name} / (${item.symbol})`} />
          <Card.Content>
            <Paragraph>
              Supply : {item.supply}
              Max Supply : {item.maxSupply}
              Market Capital (USD) : {item.marketCapUsd}
              Volume 24 hr (USD) : {item.volumeUsd24Hr}
              Price (USD) : {item.priceUsd}
              Change percent 24 hr : {item.changePercent24Hr}
            </Paragraph>
          </Card.Content>
        </Card>
      )}
    />
  );
};

export default TabCoinView;
