import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/routes/routes'
import { useCart } from '@/shared/stores/cart-store/cart-store'

export function useCheckoutSuccess() {
  const navigate = useNavigate()

  const clearCart = useCart((s) => s.clearCart)

  useEffect(() => {
    clearCart()
  }, [clearCart])

  function handleOnBack() {
    navigate(ROUTES.home, { replace: true })
  }

  return { handleOnBack, clearCart }
}
