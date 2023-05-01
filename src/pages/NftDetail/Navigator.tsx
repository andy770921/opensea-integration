import { FC } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { HStack, Text, Center, Tooltip } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export interface NavigatorProps {
  collectionName: string;
}

const Navigator: FC<NavigatorProps> = ({ collectionName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <HStack
        spacing="2px"
        cursor="pointer"
        position="absolute"
        left="40px"
        top="0"
        onClick={handleClick}
      >
        <ChevronLeftIcon boxSize={6} />
        <Text fontSize="lg" display={['none', 'block']}>
          Back
        </Text>
      </HStack>
      <Center mb={['12px', null, '20px']}>
        <Tooltip label={collectionName}>
          <Text
            fontSize="xl"
            mt={['0px', null, '20px']}
            noOfLines={1}
            maxWidth={['120px', '200px', 'unset']}
          >
            {collectionName}
          </Text>
        </Tooltip>
      </Center>
    </>
  );
};

export default Navigator;
