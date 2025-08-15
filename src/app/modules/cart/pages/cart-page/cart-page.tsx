import { ButtonRoot } from '@/app/ui/button/button'
import {
  selectCartTotalPrice,
  useCart,
} from '@/shared/stores/cart-store/cart-store'
import { formatBRL } from '@/shared/utils/format/currency'

import {
  CartListFooter,
  CartListFooterActions,
  CartListFooterContent,
  CartListHeader,
  CartListHeaderCell,
  CartListRoot,
  CartListSeparator,
} from '../../components/cart-list/cart-list'
import { CartListItem } from '../../components/cart-list/cart-list-row'

export const CartPage = () => {
  const items = useCart((s) => s.items)
  const selectedMovies = Object.values(items)
  const total = useCart(selectCartTotalPrice)

  return (
    <CartListRoot>
      <CartListHeader>
        <CartListHeaderCell className="product">produto</CartListHeaderCell>
        <CartListHeaderCell className="qtySub">
          <span>qtd</span>
          <span>subtotal</span>
        </CartListHeaderCell>
        <CartListHeaderCell className="actions" />
      </CartListHeader>

      {selectedMovies.map((m) => (
        <CartListItem
          key={m.id}
          id={m.id}
          title={m.title}
          image={m.image}
          unitPrice={m.price}
        />
      ))}

      <CartListSeparator />

      <CartListFooter>
        <CartListFooterActions>
          <ButtonRoot>finalizar pedido</ButtonRoot>
        </CartListFooterActions>

        <CartListFooterContent>
          <span className="label">total</span>
          <strong className="value">{formatBRL(total)}</strong>
        </CartListFooterContent>
      </CartListFooter>
    </CartListRoot>
  )
}
