import { forwardRef } from 'react'

import trashIcon from '@/shared/assets/icons/trash-icon.svg'
import { formatBRL } from '@/shared/utils/format/currency'

import {
  Content,
  Image,
  RemoveButton,
  Root,
  Row,
  Subtotal,
  Title,
  UnitPrice,
} from './cart-item-card-styles'
import type {
  CartItemCardRootProps,
  CartItemImageProps,
  CartItemInfoProps,
  CartItemRemoveButtonProps,
  CartItemSubtotalProps,
  CartItemTitleProps,
  CartItemUnitPriceProps,
} from './cart-item-card-types'

const CartItemCardRoot = forwardRef<HTMLElement, CartItemCardRootProps>(
  ({ labelledBy, children, ...rest }, ref) => (
    <Root ref={ref} aria-labelledby={labelledBy} {...rest}>
      {children}
    </Root>
  ),
)
CartItemCardRoot.displayName = 'CartItemCard.Root'

function CartItemImage({ alt, ...img }: CartItemImageProps) {
  return <Image alt={alt} loading="lazy" decoding="async" {...img} />
}
CartItemImage.displayName = 'CartItemCard.Image'

function CartItemContent(props: CartItemInfoProps) {
  return <Content {...props} />
}
CartItemContent.displayName = 'CartItemCard.Content'

function CartItemRow(props: CartItemInfoProps) {
  return <Row {...props} />
}
CartItemRow.displayName = 'CartItemCard.Row'

function CartItemTitle(props: CartItemTitleProps) {
  return <Title {...props} />
}
CartItemTitle.displayName = 'CartItemCard.Title'

function CartItemUnitPrice({ amount, ...rest }: CartItemUnitPriceProps) {
  return <UnitPrice {...rest}>{formatBRL(amount)}</UnitPrice>
}
CartItemUnitPrice.displayName = 'CartItemCard.UnitPrice'

function CartItemSubtotal({ amount, ...rest }: CartItemSubtotalProps) {
  return (
    <Subtotal {...rest}>
      <span className="label">SUBTOTAL</span>
      <strong className="value">{formatBRL(amount)}</strong>
    </Subtotal>
  )
}
CartItemSubtotal.displayName = 'CartItemCard.Subtotal'

function CartItemRemoveButton({ ...btn }: CartItemRemoveButtonProps) {
  return (
    <RemoveButton type="button" aria-label="Remover item do carrinho" {...btn}>
      <img src={trashIcon} alt="" aria-hidden="true" />
    </RemoveButton>
  )
}
CartItemRemoveButton.displayName = 'CartItemCard.RemoveButton'

export {
  CartItemCardRoot,
  CartItemContent,
  CartItemImage,
  CartItemRemoveButton,
  CartItemRow,
  CartItemSubtotal,
  CartItemTitle,
  CartItemUnitPrice,
}
