import { useState, createContext, FC, useContext, ReactNode } from 'react';

type Address = string;

export interface AuthContextType {
  address: Address | null;
  isLogin: boolean;
  login: (user: Address) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<Address | null>(null);
  const isLogin = address !== null;
  const login = (newAddress: Address) => {
    setAddress(newAddress);
  };

  const logout = () => {
    setAddress(null);
  };

  const value = { address, isLogin, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
