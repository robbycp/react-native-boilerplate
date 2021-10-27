import {useQuery} from 'react-query';
import type {AxiosError, AxiosResponse} from 'axios';

import apiCoinCap from '~/services/api/apiCoinCap';
import type {ResponseCoinCap} from '~/services/api/apiCoinCap';

export const useCoincapGet = () => {
  const query = useQuery<
    AxiosResponse<ResponseCoinCap['assetsGet']['response']>,
    AxiosError
  >('coincap-get', () => apiCoinCap.assetsGet());
  query.data?.data.timestamp;
  query.error?.message;
  return query;
};
