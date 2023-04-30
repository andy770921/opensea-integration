import { useQuery } from '@tanstack/react-query';
import { ASSET_DETAIL } from '../../constants/endpoints';
import { IApiAssetDetail } from '../../interfaces/apis';
import { ContentProps } from './Content';
import { NavigatorProps } from './Navigator';

interface UseDetailAssetParams {
  tokenId: string;
  contractAddress: string;
}

export const useDetailAsset = ({ tokenId, contractAddress }: UseDetailAssetParams) => {
  return useQuery<IApiAssetDetail, Error, ContentProps & NavigatorProps>(
    [ASSET_DETAIL({ tokenId, contractAddress })],
    {
      enabled: Boolean(tokenId) && Boolean(contractAddress),
      select: ({ image_url, collection, name, description, permalink }) => ({
        imageUrl: image_url || '',
        collectionName: collection.name,
        name,
        description: description || '',
        permalink,
      }),
    },
  );
};
