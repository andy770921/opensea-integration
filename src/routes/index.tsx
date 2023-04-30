import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouteObject, Outlet, redirect } from 'react-router-dom';
import { BasicLayout } from '../components/Layout';
import { URL } from '../constants/urls';

const NftDetailPage = lazy(() => import('../pages/NftDetail'));
const NftListPage = lazy(() => import('../pages/NftList'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const browserRouterList: RouteObject[] = [
  {
    path: '/',
    element: null,
    loader: async () => redirect(URL.NFT_LIST),
  },
  {
    path: URL.NFT_LIST,
    element: <NftListPage />,
  },
  {
    path: URL.NFT_DETAIL,
    element: <NftDetailPage />,
  },
];

const router = createBrowserRouter([
  {
    element: (
      <BasicLayout>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </BasicLayout>
    ),
    children: browserRouterList,
    errorElement: <NotFoundPage />,
  },
]);

export default router;
