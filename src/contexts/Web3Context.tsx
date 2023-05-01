import { createContext, FC, useContext, useMemo, ReactNode } from 'react';
import Web3 from 'web3';

export interface Web3ContextType extends Web3 {}

const Web3Context = createContext<Nullable<Web3ContextType> | undefined>(undefined);

const Web3Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useMemo<Nullable<Web3ContextType>>(() => {
    if (window.ethereum) {
      return new Web3(window.ethereum);
    }
    return null;
  }, []);

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};

export { Web3Provider, useWeb3 };
