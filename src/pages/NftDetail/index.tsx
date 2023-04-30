import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Content from './Content';
import Navigator from './Navigator';
import { useDetailAsset } from './queries';

const NftDetail: FC = () => {
  const { tokenId = '', contractAddress = '' } = useParams();
  const {
    data: { imageUrl = '', collectionName = '', name = '', description = '', permalink = '' } = {},
  } = useDetailAsset({ tokenId, contractAddress });
  // const {
  //   imageUrl = '',
  //   collectionName = '',
  //   name = '',
  //   description = '',
  //   permalink = '',
  // } = data ?? {};

  return (
    <>
      <Navigator collectionName={collectionName} />
      <Content imageUrl={imageUrl} name={name} description={description} permalink={permalink} />
    </>
  );
};

export default NftDetail;
