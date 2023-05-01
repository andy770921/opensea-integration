import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import { Web3Provider } from './contexts/Web3Context';
import router from './routes';
import queryClientConfig from './services/reactQuery/config';

const queryClient = new QueryClient({
  defaultOptions: queryClientConfig,
});

const App = () => {
  return (
    <AuthProvider>
      <Web3Provider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <RouterProvider router={router} />
          </ChakraProvider>
        </QueryClientProvider>
      </Web3Provider>
    </AuthProvider>
  );
};

export default App;
