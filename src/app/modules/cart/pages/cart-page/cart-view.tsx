import { ButtonRoot } from '@/app/ui/button/button'
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

type Item = {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}

type Props = {
  items: Item[]
  total: number
  hasItems: boolean
  onCheckout: () => void
}

export function CartView({ items, total, hasItems, onCheckout }: Props) {
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
          <ButtonRoot onClick={onCheckout} disabled={!hasItems}>
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
