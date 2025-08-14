import { Button, ButtonIconCount } from '@/app/ui/button/button'
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

export default function HomePage() {
  const { data: movies = [], isLoading, isError } = useMovies()
  const addItem = useCart((s) => s.addItem)
  const items = useCart((s) => s.items)

  // if (isLoading) return <Page>Carregando…</Page>
  // if (isError) return <Page>Erro ao carregar filmes.</Page>

  return (
    <MoviesListWrapper aria-label="Lista de filmes">
      {movies.map((m) => {
        const qty = items[m.id]?.quantity ?? 0
        const isAdded = qty > 0
        const titleId = `movie-${m.id}-title`

        return (
          <MovieCardRoot key={m.id} labelledBy={titleId}>
            <MovieCardImage src={m.image} alt={`Capa do filme ${m.title}`} />
            <MovieCardTitle id={titleId}>{m.title}</MovieCardTitle>
            <MovieCardPrice amount={m.price} />

            <MovieCardActions>
              <Button
                variant={isAdded ? 'success' : 'primary'}
                onClick={() =>
                  addItem({
                    id: m.id,
                    title: m.title,
                    image: m.image,
                    price: m.price,
                  })
                }
              >
                <ButtonIconCount src={cartIcon} count={qty} />
                Adicionar ao carrinho
              </Button>
            </MovieCardActions>
          </MovieCardRoot>
        )
      })}
    </MoviesListWrapper>
  )
}
