import {createAxios, createExportedEndpoint} from '~/utils/api';
import type {Endpoint} from '~/types/api';

const apiCoinCapBase = createAxios({
  baseURL: 'https://api.coincap.io/v2',
});
const endpoints = {
  getAssets: ['get', '/assets'] as Endpoint,
};

export default {
  ...createExportedEndpoint(apiCoinCapBase, endpoints),
};
