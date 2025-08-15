import { useCartPage } from '../../hooks/use-cart-page'
import { CartView } from './cart-view'

export const CartPage = () => {
  const { items, total, hasItems, handleCheckout } = useCartPage()
  return (
    <CartView
      items={items}
      total={total}
      hasItems={hasItems}
      onCheckout={handleCheckout}
    />
  )
}
