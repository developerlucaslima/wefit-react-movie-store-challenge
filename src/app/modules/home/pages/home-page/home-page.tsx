import { ButtonIconCount, ButtonRoot } from '@/app/ui/button/button'
import { useMovies } from '@/shared/api/get-all-movies/use-movies'
import cartIcon from '@/shared/assets/icons/cart-icon.svg'
import { useCart } from '@/shared/stores/cart-store/cart-store'

import {
  MovieCardActions,
  MovieCardImage,
  MovieCardPrice,
  MovieCardRoot,
  MovieCardTitle,
} from '../../components/movie-card/movie-card'
import { MoviesListWrapper } from './home-page-styles'

export const HomePage = () => {
  const { data: movies = [], isLoading, isError } = useMovies()
  const addItem = useCart((s) => s.addItem)
  const items = useCart((s) => s.items)

  // if (isLoading) return <Page>Carregando…</Page>
  // if (isError) return <Page>Erro ao carregar filmes.</Page>

  return (
    <MoviesListWrapper aria-label="Lista de filmes">
      {movies.map((movie) => {
        const quantity = items[movie.id]?.quantity ?? 0
        const isAdded = quantity > 0
        const titleId = `movie-${movie.id}-title`

        return (
          <MovieCardRoot key={movie.id} labelledBy={titleId}>
            <MovieCardImage
              src={movie.image}
              alt={`Capa do filme ${movie.title}`}
            />
            <MovieCardTitle id={titleId}>{movie.title}</MovieCardTitle>
            <MovieCardPrice amount={movie.price} />

            <MovieCardActions>
              <ButtonRoot
                variant={isAdded ? 'success' : 'primary'}
                onClick={() =>
                  addItem({
                    id: movie.id,
                    title: movie.title,
                    image: movie.image,
                    price: movie.price,
                  })
                }
              >
                <ButtonIconCount src={cartIcon} count={quantity} />
                Adicionar ao carrinho
              </ButtonRoot>
            </MovieCardActions>
          </MovieCardRoot>
        )
      })}
    </MoviesListWrapper>
  )
}
