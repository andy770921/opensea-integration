import { FC } from 'react';
import { Skeleton, SkeletonText, VStack } from '@chakra-ui/react';

const ContentSkeleton: FC = () => {
  return (
    <VStack mt="28px" spacing="24px">
      <SkeletonText w="150px" noOfLines={1} skeletonHeight="12px" />
      <Skeleton w="250px" height="250px" />
      <SkeletonText w="300px" noOfLines={4} spacing="12px" skeletonHeight="12px" />
    </VStack>
  );
};

export default ContentSkeleton;
