import { ROUTES } from '@/routes/routes'
import basketIcon from '@/shared/assets/icons/basket-icon.svg'
import {
  selectCartTotalItems,
  useCart,
} from '@/shared/stores/cart-store/cart-store'

import {
  Brand,
  BrandLink,
  CartCount,
  CartIcon,
  CartIconWrapper,
  CartInfo,
  CartLabel,
  CartLink,
  HeaderBar,
  HeaderInner,
} from './header-styles'

export const Header = () => {
  const cartCount = useCart(selectCartTotalItems)
  const itemWord = cartCount === 1 ? 'item' : 'itens'

  return (
    <HeaderBar>
      <HeaderInner>
        <BrandLink to={ROUTES.home} aria-label="Ir para a página inicial">
          <Brand>WeMovies</Brand>
        </BrandLink>

        <CartLink
          to={ROUTES.cart}
          aria-label={`Ir para o carrinho, ${cartCount} ${itemWord}`}
        >
          <CartInfo>
            <CartLabel>Meu Carrinho</CartLabel>
            <CartCount aria-live="polite">
              {cartCount} {itemWord}
            </CartCount>
          </CartInfo>

          <CartIconWrapper>
            <CartIcon src={basketIcon} alt="" aria-hidden="true" />
          </CartIconWrapper>
        </CartLink>
      </HeaderInner>
    </HeaderBar>
  )
}
