import { FC, ReactNode } from 'react';
import { Container, Link, Text, Flex, Tooltip } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

const BasicLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { address, isLogin, login, logout } = useAuth();

  return (
    <>
      <Container maxW="1200px" mt="24px" position="relative" centerContent>
        <Flex justifyContent="flex-end" columnGap="20px" position="absolute" right="40px">
          {isLogin ? (
            <>
              <Tooltip label={address}>
                <Text
                  display={['none', 'none', 'block']}
                  fontSize="lg"
                  noOfLines={1}
                  maxWidth={['0px', null, '100px', '200px']}
                  whiteSpace="nowrap"
                >
                  Hi, {address}
                </Text>
              </Tooltip>
              <Link color="teal.600" fontSize="lg" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <Link
              color="teal.600"
              fontSize="lg"
              onClick={() => login('0x85fD692D2a075908079261F5E351e7fE0267dB02')}
            >
              Login
            </Link>
          )}
        </Flex>
        {children}
      </Container>
    </>
  );
};

export default BasicLayout;
