import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

const Introduction: FC = () => {
  const { isLogin } = useAuth();

  return (
    <>
      <Text fontSize="5xl">NFT List</Text>
      <Text fontSize="lg" noOfLines={1}>
        {isLogin ? "Owner's assets:" : 'Assets in the market:'}
      </Text>
    </>
  );
};

export default Introduction;
