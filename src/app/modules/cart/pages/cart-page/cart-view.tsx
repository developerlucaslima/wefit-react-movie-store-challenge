import { ButtonRoot } from '@/app/ui/button/button'
import type { CartItem } from '@/shared/stores/cart-store/cart-store-types'
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

type Props = {
  items: CartItem[]
  total: number
  emptyCart: boolean
  onCheckout: () => void
}

export function CartView({ items, total, emptyCart, onCheckout }: Props) {
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

      {items.map((m) => (
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
          <ButtonRoot onClick={onCheckout} disabled={emptyCart}>
            finalizar pedido
          </ButtonRoot>
        </CartListFooterActions>

        <CartListFooterContent>
          <span className="label">total</span>
          <strong className="value">{formatBRL(total)}</strong>
        </CartListFooterContent>
      </CartListFooter>
    </CartListRoot>
  )
}
