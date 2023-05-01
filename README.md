# Opensea Integration

## Demo Link

https://opensea-integration.vercel.app/

## API Ref

- [Opensea API - Retrieve assets](https://docs.opensea.io/v1.0/reference/getting-assets)
- [Opensea API - Retrieve an asset (Testnets)](https://docs.opensea.io/v1.0/reference/retrieving-a-single-asset-testnets)

## Packages

- [Vite](https://vitejs.dev/guide/why.html)
- [Axios](https://github.com/axios/axios)
- [Chakra UI](https://chakra-ui.com/getting-started)
- [Web3](https://web3js.readthedocs.io/en/v1.2.6/getting-started.html)
- [React Query](https://tanstack.com/query/latest/docs/react/overview)
- [React Router](https://reactrouter.com/en/main)
- [React Infinite Scroller](https://github.com/danbovey/react-infinite-scroller)
- [Path to Regexp](https://github.com/pillarjs/path-to-regexp)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Folder Structure under /src

```
┌──  components                # Components for general usage
│    ├── ImageCard
│    │    ├── ImageCard.tsx
│    │    ├── ImageCardSkeleton.tsx
│    │    └── index.tsx        # Root of <ImageCard /> and <ImageCardSkeleton />
│    ├── Layout
│    │    ├── BasicLayout.tsx
│    │    └── index.tsx        # Root of <BasicLayout />
│    ├── Loader.tsx            # <Loader /> for general usage
│    └── LoginSwitch.tsx       # <LoginSwitch /> for BasicLayout or general usage
│
├── constants                  # Shared constants
│    ├── endpoints.ts          # API endpoints
│    └── urls.ts               # Page route urls
│
├── contexts                   # React context
│    ├── AuthContext.tsx       # <AuthProvider /> and useAuth for auth state
│    └── Web3Context.tsx       # <Web3Provider /> and useWeb3 for singleton web3 instance
│
├── interfaces                 # TypeScript shared interface
│    └── apis.ts               # Interface for API response
│
├── pages                      # Page component
│    ├── NftDetail
│    │    ├── Content.tsx
│    │    ├── ContentSkeleton.tsx
│    │    ├── Navigator.tsx
│    │    ├── index.tsx        # Root of <NftDetail />
│    │    └── queries.ts       # API queries in NftDetail page
│    ├── NftList
│    │    ├── List
│    │    │    ├── CardSkeletonList.tsx
│    │    │    ├── EmptyList.tsx
│    │    │    └── index.tsx
│    │    ├── Introduction.tsx
│    │    ├── index.tsx        # Root of <NftList />
│    │    └── queries.ts       # API queries in NftList page
│    └── NotFound
│         └── index.tsx        # Root of <NotFound />
│
├── routes
│    └── index.ts              # Page routes
│
├── services                   # Third-party library
│    └── reactQuery            # React query for data fetching
│         ├── config.ts
│         ├── fetchers.ts      # defaultQueryFn / defaultMutationFn for general usage
│         └── utils.ts
│
├── App.tsx                    # Root of overall layout
├── main.tsx                   # Root of ReactDOM renderer
├── misc.d.ts                  # Customized TypeScript utility type
└── vite-env.d.ts              # Vite TS declaration file
```

## Project Environment Setup:

- [Vite](https://vitejs.dev/guide/) tutorial
- More detail steps listed [here](https://github.com/andy770921/react_vite_boilerplate).

## Available Scripts

### `npm run dev`, `npm run build`, `npm run preview`

Command line Offered by [Vite](https://vitejs.dev/guide/cli.html).

### `npm run lint`

Check lint.

### `npm run format`

Adjust format and save.
