import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

const Introduction: FC = () => {
  const { isLogin } = useAuth();

  return (
    <Box mb="8px">
      <Text fontSize="5xl">NFT List</Text>
      <Text fontSize="lg" noOfLines={1}>
        {isLogin ? "Owner's assets:" : 'Assets in the market:'}
      </Text>
    </Box>
  );
};

export default Introduction;
