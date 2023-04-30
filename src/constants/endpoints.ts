import { compile } from 'path-to-regexp';

export const API_BASE_URL = 'https://testnets-api.opensea.io/api/v1/';

export const ASSETS = '/assets';
export const ASSET_DETAIL = ({
  contractAddress,
  tokenId,
}: {
  contractAddress: string;
  tokenId: string;
}) => compile('/asset/:contractAddress/:tokenId')({ contractAddress, tokenId });
