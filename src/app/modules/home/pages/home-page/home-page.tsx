import { useHomePage } from '../../hooks/use-home-page'
import { HomeView } from './home-view'

export const HomePage = () => {
  const { movies, isLoading, getQuantity, handleAdd } = useHomePage()
  return (
    <HomeView
      movies={movies}
      isLoading={isLoading}
      getQuantity={getQuantity}
      onAdd={handleAdd}
    />
  )
}
