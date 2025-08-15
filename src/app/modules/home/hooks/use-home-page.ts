import { useCallback } from 'react'

import { useMovies } from '@/shared/api/get-all-movies/use-movies'
import { useCart } from '@/shared/stores/cart-store/cart-store'

export function useHomePage() {
  const { data: movies = [], isLoading } = useMovies()
  const addItem = useCart((s) => s.addItem)
  const items = useCart((s) => s.items)

  const getQuantity = useCallback(
    (id: number) => items[id]?.quantity ?? 0,
    [items],
  )

  const handleAdd = useCallback(
    (movie: { id: number; title: string; image: string; price: number }) => {
      addItem({
        id: movie.id,
        title: movie.title,
        image: movie.image,
        price: movie.price,
      })
    },
    [addItem],
  )

  return { movies, isLoading, getQuantity, handleAdd }
}
