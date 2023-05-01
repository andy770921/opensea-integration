import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Content from './Content';
import Navigator from './Navigator';
import { useDetailAsset } from './queries';
import ContentSkeleton from './ContentSkeleton';

const NftDetail: FC = () => {
  const { tokenId = '', contractAddress = '' } = useParams();
  const {
    isLoading,
    data: { imageUrl = '', collectionName = '', name = '', description = '', permalink = '' } = {},
  } = useDetailAsset({ tokenId, contractAddress });

  if (isLoading) {
    return <ContentSkeleton />;
  }
  return (
    <Container maxW="600px">
      <Navigator collectionName={collectionName} />
      <Content imageUrl={imageUrl} name={name} description={description} permalink={permalink} />
    </Container>
  );
};

export default NftDetail;
