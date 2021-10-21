import React from 'react';
import {FlatList} from 'react-native';
import {Card, Paragraph, useTheme} from 'react-native-paper';

import LoadingContent from '~/components/basic/Loading/LoadingContent';
import type {Asset} from '~/services/api/apiCoinCap';

interface Props {
  data?: Asset[];
  isLoading: boolean;
}

const TabCoinView = ({data, isLoading}: Props) => {
  const theme = useTheme();
  return (
    <LoadingContent isVisible={isLoading}>
      <FlatList
        data={data}
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
    </LoadingContent>
  );
};

export default TabCoinView;
