import { api } from '@/shared/lib/axios'

import type { ApiMovie, GetAllMoviesResponse } from './get-all-movies-types'



export async function getAllMovies(): Promise<ApiMovie[]> {
  const { data } = await api.get<GetAllMoviesResponse>('/movies')
  return data.products
}
