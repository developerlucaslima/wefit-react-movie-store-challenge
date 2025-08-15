import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/routes/routes'
import {
  selectCartTotalPrice,
  useCart,
} from '@/shared/stores/cart-store/cart-store'

export function useCartPage() {
  const navigate = useNavigate()

  const itemsRecord = useCart((s) => s.items)
  const clearCart = useCart((s) => s.clearCart)
  const total = useCart(selectCartTotalPrice)

  const items = useMemo(() => Object.values(itemsRecord), [itemsRecord])
  const hasItems = items.length > 0

  const handleCheckout = useCallback(() => {
    if (!hasItems) return
    clearCart()
    navigate(ROUTES.checkout, { replace: false })
  }, [hasItems, clearCart, navigate])

  return { items, total, hasItems, handleCheckout }
}
