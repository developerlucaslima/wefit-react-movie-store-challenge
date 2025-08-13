import { useQuery } from '@tanstack/react-query'

import { getAllMovies } from './get-all-movies'
import type { ApiMovie } from './get-all-movies-types'

export const moviesKeys = {
  all: ['movies'] as const,
}

export function useMovies() {
  return useQuery<ApiMovie[]>({
    queryKey: moviesKeys.all,
    queryFn: getAllMovies,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  })
}
