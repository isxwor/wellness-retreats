import useSWR from 'swr';

import { objToArray } from '#/lib/utils';
import { RetreatItem } from '#/types';
import { useSearchParams } from 'react-router-dom';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BACKEND_URL =
  'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';

type FetchOptions = {
  search?: string;
  filter?: string;
  location?: string;
  page?: number;
  limit: number;
};

export const useRetreats = (options?: { limit?: number }) => {
  const [searchParams] = useSearchParams();
  const params: FetchOptions = {
    filter: searchParams.get('filter') || undefined,
    search: searchParams.get('search') || undefined,
    location: searchParams.get('location') || undefined,
    limit: options?.limit || 10,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  };

  const query = new URLSearchParams(objToArray(params));

  const { data, error, isLoading } = useSWR<RetreatItem[]>(
    `${BACKEND_URL}?${query.toString()}`,
    fetcher
  );

  const hasNextPage = !((data?.length || 0) < params.limit);

  // string is returned from api when no match or data is found
  if (typeof data === 'string') {
    return {
      retreats: undefined,
      isLoading,
      error,
      hasNextPage,
    };
  }

  return {
    retreats: data,
    isLoading,
    error,
    hasNextPage,
  };
};
