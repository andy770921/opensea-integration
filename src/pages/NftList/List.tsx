import { FC } from 'react';
import { useNavigate, generatePath } from 'react-router-dom';
import { Wrap } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroller';
import ImageCard from '../../components/ImageCard';
import Loader from '../../components/Loader';
import { URL } from '../../constants/urls';
import { useNftListInfiniteQuery } from './queries';

const List: FC = () => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data } = useNftListInfiniteQuery();
  const navigate = useNavigate();
  //   list page<Link to="/nfts/123">To detail page</Link>
  const makeClickHandler = (tokenId: string, contractAddress: string) => () => {
    console.log({ tokenId, contractAddress });
    navigate(generatePath(URL.NFT_DETAIL, { tokenId, contractAddress }));
  };
  return (
    <>
      <InfiniteScroll
        loadMore={fetchNextPage as InfiniteScroll['props']['loadMore']}
        hasMore={!isFetchingNextPage && hasNextPage}
      >
        <Wrap justify="center">
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
