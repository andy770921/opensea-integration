import { useState, createContext, FC, useContext, useCallback, useMemo, ReactNode } from 'react';

type Address = string;

export interface AuthContextType {
  address: Nullable<Address>;
  isLogin: boolean;
  login: (user: Address) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<Nullable<Address>>(null);
  const isLogin = address !== null;
  const login = useCallback((newAddress: Address) => {
    setAddress(newAddress);
  }, []);

  const logout = useCallback(() => {
    setAddress(null);
  }, []);

  const value = useMemo(
    () => ({ address, isLogin, login, logout }),
    [address, isLogin, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
