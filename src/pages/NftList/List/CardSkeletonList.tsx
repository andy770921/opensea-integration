import { FC } from 'react';
import { Wrap } from '@chakra-ui/react';
import { ImageCardSkeleton } from '../../../components/ImageCard';

const CardSkeletonList: FC = () => {
  return (
    <Wrap justify="center" spacing="20px">
      {[...Array(6)].map((_, idx) => (
        <ImageCardSkeleton key={idx} />
      ))}
    </Wrap>
  );
};

export default CardSkeletonList;
