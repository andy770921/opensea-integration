import { DefaultOptions } from '@tanstack/react-query';
import { defaultQueryFn } from './fetchers';
import { ensureStringifyQueryKey } from './utils';

const queryClientConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    queryFn: async ({ queryKey }) => {
      if (ensureStringifyQueryKey(queryKey)) {
        return defaultQueryFn(queryKey.join('/'));
      }
      throw new Error('Invalid QueryKey');
    },
  },
};

export default queryClientConfig;
