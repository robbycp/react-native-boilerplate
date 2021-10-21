import {createAxios, createExportedEndpoint} from '~/utils/api';
import type {Endpoint} from '~/types/api';

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

const apiCoinCapBase = createAxios({
  baseURL: 'https://api.coincap.io/v2',
});
export const endpoints = {
  assetsGet: {
    method: 'get',
    path: '/assets',
    response: {data: [], timestamp: 0},
  } as Endpoint<{data: Asset[]; timestamp: number}>,
};

export default createExportedEndpoint(apiCoinCapBase, endpoints);
