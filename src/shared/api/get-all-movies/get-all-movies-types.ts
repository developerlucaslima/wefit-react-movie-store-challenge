export type ApiMovie = {
  id: number
  title: string
  price: number
  image: string
}

export type GetAllMoviesResponse = {
  products: ApiMovie[]
}