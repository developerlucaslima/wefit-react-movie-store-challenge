import { useCartPage } from '../../hooks/use-cart-page'
import { CartView } from './cart-view'

export const CartPage = () => {
  const { items, total, emptyCart, handleCheckout } = useCartPage()
  return (
    <CartView
      items={items}
      total={total}
      emptyCart={emptyCart}
      onCheckout={handleCheckout}
    />
  )
}
