import { useInfiniteQuery, QueryFunctionContext, QueryKey } from '@tanstack/react-query';
import { ASSETS } from '../../constants/endpoints';
import { IApiAssets, IAsset } from '../../interfaces/apis';
import { defaultQueryFn } from '../../services/reactQuery/fetchers';
import { useAuth } from '../../contexts/AuthContext';

export const useNftListInfiniteQuery = () => {
  const { address, isLogin } = useAuth();

  return useInfiniteQuery<IApiAssets, Error, IAsset>({
    queryKey: [ASSETS, { address }],
    queryFn: ({ pageParam }: QueryFunctionContext<QueryKey, string>) => {
      return defaultQueryFn(ASSETS, {
        params: {
          limit: 20,
          ...(pageParam ? { cursor: pageParam } : {}),
          ...(isLogin ? { owner: address } : {}),
        },
      });
    },
    select: ({ pages, pageParams }) => ({
      // NOTE: filter assets without image url
      pages: pages
        .flatMap((page) => page.assets)
        .filter(({ image_preview_url }) => Boolean(image_preview_url)),
      pageParams,
    }),
    getNextPageParam: (lastPage) => lastPage.next,
    staleTime: Infinity, // NOTE: prevent re-fetching old data
  });
};
