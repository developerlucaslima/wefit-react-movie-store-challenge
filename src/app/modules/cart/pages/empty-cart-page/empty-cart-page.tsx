import { useEmptyCart } from '../../hooks/use-empty-cart'
import { EmptyCartView } from './empty-cart-view'

export const EmptyCartPage = () => {
  const { handleOnBack } = useEmptyCart()
  return <EmptyCartView onBack={handleOnBack} />
}
