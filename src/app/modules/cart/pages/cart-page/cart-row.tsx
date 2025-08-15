import { useCart } from '@/shared/stores/cart-store/cart-store'

import {
  CartItemCardRoot,
  CartItemContent,
  CartItemImage,
  MobileItemRemoveButton,
  DesktopCartItemRemoveButton,
  CartItemRow,
  CartItemSubtotal,
  CartItemTitle,
  CartItemUnitPrice,
} from '../../components/cart-item-card/cart-item-card'
import { QuantityStepper } from '../../components/quantity-stepper/quantity-stepper'

type Props = {
  id: number
  title: string
  image: string
  unitPrice: number
}

export function CartCardItem({ id, title, image, unitPrice }: Props) {
  const item = useCart((s) => s.items[id])
  const incrementItem = useCart((s) => s.incrementItem)
  const decrementItem = useCart((s) => s.decrementItem)
  const removeItem = useCart((s) => s.removeItem)

  const quantity = item?.quantity ?? 0
  const subtotal = item ? item.quantity * item.price : 0

  const labelledBy = `cart-item-${id}-label`

  const handleIncrement = () => incrementItem(id)
  const handleDecrement = () => decrementItem(id)
  const handleRemove = () => removeItem(id)

  return (
    <CartItemCardRoot labelledBy={labelledBy}>
      <CartItemImage src={image} alt={`Capa do filme ${title}`} />

      <CartItemContent>
        <CartItemRow>
          <CartItemTitle id={labelledBy}>{title}</CartItemTitle>
          <CartItemUnitPrice amount={unitPrice} />
          <MobileItemRemoveButton
            type="button"
            onClick={handleRemove}
            aria-label={`Remover ${title} do carrinho`}
            title={`Remover ${title}`}
          />
        </CartItemRow>

        <CartItemRow>
          <QuantityStepper
            value={quantity}
            min={1}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            labelledBy={labelledBy}
          />
          <CartItemSubtotal amount={subtotal} />
        </CartItemRow>

        <DesktopCartItemRemoveButton
          type="button"
          onClick={handleRemove}
          aria-label={`Remover ${title} do carrinho`}
          title={`Remover ${title}`}
        />
      </CartItemContent>
    </CartItemCardRoot>
  )
}
