import { QueryKey } from '@tanstack/react-query';

export const ensureStringifyQueryKey = (queryKey: QueryKey): queryKey is (string | number)[] => {
  return (
    Array.isArray(queryKey) &&
    queryKey.length > 0 &&
    queryKey.every((val) => typeof val === 'string' || typeof val === 'number')
  );
};
