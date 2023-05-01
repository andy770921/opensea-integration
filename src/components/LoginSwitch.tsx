import { FC } from 'react';
import {
  Link,
  HStack,
  IconButton,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useWeb3 } from '../contexts/Web3Context';

interface LoginSwitchProps {
  address: Nullable<string>;
  isLogin: boolean;
  onFakeLogin: () => void;
  onLoginSuccess: (address: string) => void;
  onLoginError: (error: Error) => void;
  onLogout: () => void;
}

const LoginSwitch: FC<LoginSwitchProps> = ({
  address,
  isLogin,
  onFakeLogin,
  onLoginSuccess,
  onLoginError,
  onLogout,
}) => {
  const web3 = useWeb3();
  const handleMetaMaskLogin = async () => {
    try {
      if (!web3) {
        throw new Error('Cannot detect MetaMask or other wallet');
      }
      const accounts = await web3.eth.requestAccounts();
      onLoginSuccess(accounts[0]);
    } catch (error) {
      onLoginError(error as Error);
    }
  };

  return (
    <>
      <Show above="md">
        <HStack spacing="12px">
          {isLogin ? (
            <>
              {address && (
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
              )}
              <Link color="teal.600" fontSize="lg" onClick={onLogout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link color="teal.600" fontSize="lg" onClick={onFakeLogin}>
                Demo Login
              </Link>
              <Link color="teal.600" fontSize="lg" onClick={handleMetaMaskLogin}>
                MetaMask Login
              </Link>
            </>
          )}
        </HStack>
      </Show>
      <Show below="md">
        <Menu>
          <MenuButton
            as={IconButton}
            colorScheme="gray"
            aria-label="account login"
            icon={<HamburgerIcon boxSize={6} />}
          />
          <MenuList>
            {isLogin ? (
              <MenuItem onClick={onLogout}>Logout</MenuItem>
            ) : (
              <>
                <MenuItem onClick={onFakeLogin}>Demo Login</MenuItem>
                <MenuItem onClick={handleMetaMaskLogin}>MetaMask Login</MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </Show>
    </>
  );
};

export default LoginSwitch;
