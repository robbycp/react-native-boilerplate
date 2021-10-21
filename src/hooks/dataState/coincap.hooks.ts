import {useQuery} from 'react-query';

import apiCoinCap from '~/services/api/apiCoinCap';

export const useCoincapGet = () => {
  const query = useQuery('coincap-get', () => apiCoinCap.assetsGet());
  return query;
};
