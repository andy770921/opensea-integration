import { FC, MouseEventHandler } from 'react';
import { Card, CardBody, Stack, Image, Heading, Text } from '@chakra-ui/react';

interface ImageCardProps {
  src: Nullable<string>;
  title: string;
  description: Nullable<string>;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const ImageCard: FC<ImageCardProps> = ({ src, title, description, onClick }) => (
  <Card
    w={['45%', '300px']}
    cursor="pointer"
    _hover={{
      background: 'yellow.100',
      transitionDuration: '0.4s',
    }}
    onClick={onClick}
  >
    <CardBody>
      {src && (
        <Image src={src} alt={title} borderRadius="lg" boxSize={['200px', '280px']} fit="cover" />
      )}
      <Stack mt="6" spacing="3">
        <Heading size="md" noOfLines={[1, 2]}>
          {title}
        </Heading>
        {description && <Text noOfLines={[3]}>{description}</Text>}
      </Stack>
    </CardBody>
  </Card>
);

export default ImageCard;
