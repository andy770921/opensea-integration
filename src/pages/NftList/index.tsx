import { FC } from 'react';
import { Link } from 'react-router-dom';
import Introduction from './Introduction';
import List from './List';

const NftList: FC = () => {
  return (
    <>
      <Introduction />
      list page<Link to="/nfts/123">To detail page</Link>
      <List />
    </>
  );
};

export default NftList;
