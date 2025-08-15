import { ButtonIconCount, ButtonRoot } from '@/app/ui/button/button'
import { SpinnerRoot } from '@/app/ui/spinner/spinner'
import cartIcon from '@/shared/assets/icons/cart-icon.svg'

import {
  MovieCardActions,
  MovieCardImage,
  MovieCardPrice,
  MovieCardRoot,
  MovieCardTitle,
} from '../../components/movie-card/movie-card'
import { MoviesListWrapper } from './home-page-styles'

type Movie = { id: number; title: string; image: string; price: number }

type Props = {
  movies: Movie[]
  isLoading: boolean
  getQuantity: (id: number) => number
  onAdd: (movie: Movie) => void
}

export function HomeView({ movies, isLoading, getQuantity, onAdd }: Props) {
  if (isLoading) return <SpinnerRoot />

  return (
    <MoviesListWrapper aria-label="Lista de filmes">
      {movies.map((movie) => {
        const titleId = `movie-${movie.id}-title`
        const quantity = getQuantity(movie.id)
        const isAdded = quantity > 0

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
                onClick={() => onAdd(movie)}
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
