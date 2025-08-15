import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/routes/routes'
import {
  selectCartTotalPrice,
  useCart,
} from '@/shared/stores/cart-store/cart-store'

export function useCartPage() {
  const navigate = useNavigate()

  const itemsRecord = useCart((s) => s.items)
  const total = useCart(selectCartTotalPrice)

  const items = Object.values(itemsRecord)
  const emptyCart = items.length <= 0

  useEffect(() => {
    if (emptyCart) {
      navigate(ROUTES['empty-cart'], { replace: true })
    }
  }, [emptyCart, navigate])

  function handleCheckout() {
    if (emptyCart) return
    navigate(ROUTES.checkout, { replace: false })
  }

  return { items, total, emptyCart, handleCheckout }
}
