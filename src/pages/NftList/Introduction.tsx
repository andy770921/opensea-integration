import { FC } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

const Introduction: FC = () => {
  const { isLogin } = useAuth();

  return (
    <VStack mb="8px" justifyContent="center">
      <Text fontSize="5xl">NFT List</Text>
      <Text fontSize="xl" noOfLines={1}>
        {isLogin ? "Owner's assets:" : 'Assets in the market:'}
      </Text>
    </VStack>
  );
};

export default Introduction;
