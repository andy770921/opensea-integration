import { FC } from 'react';
import { Image, VStack, Text, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export interface ContentProps {
  imageUrl: string;
  name: string;
  description: string;
  permalink: string;
}

const Content: FC<ContentProps> = ({ imageUrl, name, description, permalink }) => {
  return (
    <VStack>
      {imageUrl && <Image src={imageUrl} alt={name} boxSize="250px" objectFit="cover" />}
      <Text fontSize="2xl" fontWeight="bold" mt="4px">
        {name}
      </Text>
      <Text fontSize="xl" mt="8px">
        Description:
      </Text>
      <Text fontSize="xl" w="80%" minH="80px" textAlign="center">
        {description || '-- Not Provided --'}
      </Text>
      <Button
        mt="20px"
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
        as="a"
        href={permalink}
        rel="noopener noreferrer"
        target="_blank"
      >
        Permalink
      </Button>
    </VStack>
  );
};

export default Content;
