import { FC, ReactNode } from 'react';
import { Container, Flex, useToast } from '@chakra-ui/react';
import LoginSwitch from '../LoginSwitch';
import { useAuth } from '../../contexts/AuthContext';

const BasicLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const toast = useToast();
  const { address, isLogin, login, logout } = useAuth();

  const handleFakeLogin = () => {
    login('0x85fD692D2a075908079261F5E351e7fE0267dB02');
  };

  const handleLoginSuccess = (hotWalletAddress: string) => {
    login(hotWalletAddress);
    toast({ description: 'MetaMask Account Login Success', status: 'success' });
  };

  const handleLoginError = (error: Error) => {
    toast({
      title: `${error}`,
      status: 'error',
    });
  };

  return (
    <>
      <Container maxW="1200px" mt="24px" position="relative" centerContent overflowX="hidden">
        <Flex columnGap="20px" position="absolute" right="40px">
          <LoginSwitch
            address={address}
            isLogin={isLogin}
            onFakeLogin={handleFakeLogin}
            onLoginSuccess={handleLoginSuccess}
            onLoginError={handleLoginError}
            onLogout={logout}
          />
        </Flex>
        {children}
      </Container>
    </>
  );
};

export default BasicLayout;
