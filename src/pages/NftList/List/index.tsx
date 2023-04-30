import { FC } from 'react';
import { useNavigate, generatePath } from 'react-router-dom';
import { Wrap } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroller';
import { ImageCard } from '../../../components/ImageCard';
import Loader from '../../../components/Loader';
import { URL } from '../../../constants/urls';
import { useNftListInfiniteQuery } from '../queries';
import CardSkeletonList from './CardSkeletonList';
import EmptyList from './EmptyList';

const List: FC = () => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, isLoading } =
    useNftListInfiniteQuery();
  const navigate = useNavigate();
  const makeClickHandler = (tokenId: string, contractAddress: string) => () => {
    navigate(generatePath(URL.NFT_DETAIL, { tokenId, contractAddress }));
  };

  if (isLoading) {
    return <CardSkeletonList />;
  }
  if (data?.pages.length === 0) {
    return <EmptyList />;
  }

  return (
    <>
      <InfiniteScroll
        loadMore={fetchNextPage as InfiniteScroll['props']['loadMore']}
        hasMore={!isFetchingNextPage && hasNextPage}
      >
        <Wrap justify="center" spacing="20px">
          {data?.pages.map(
            ({ id, token_id, asset_contract, image_preview_url, name, description }) => (
              <ImageCard
                key={id}
                src={image_preview_url}
                title={name}
                description={description}
                onClick={makeClickHandler(token_id, asset_contract.address)}
              />
            ),
          )}
        </Wrap>
      </InfiniteScroll>
      {isFetchingNextPage && <Loader />}
    </>
  );
};

export default List;
