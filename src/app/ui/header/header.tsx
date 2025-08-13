import { ROUTES } from '@/routes/routes'
import cartIcon from '@/shared/assets/icons/cart-icon.svg'

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
import type { HeaderProps } from './header-types'

export const HeaderComponent = ({ cartCount }: HeaderProps) => {
  return (
    <HeaderBar>
      <HeaderInner>
        <BrandLink to={ROUTES.home} aria-label="Ir para a página inicial">
          <Brand>WeMovies</Brand>
        </BrandLink>

        <CartLink
          to={ROUTES.cart}
          aria-label={`Ir para o carrinho, ${cartCount} ${cartCount === 1 ? 'item' : 'itens'}`}
        >
          <CartInfo>
            <CartLabel>Meu Carrinho</CartLabel>
            <CartCount aria-live="polite">
              {cartCount} {cartCount === 1 ? 'item' : 'itens'}
            </CartCount>
          </CartInfo>

          <CartIconWrapper>
            <CartIcon src={cartIcon} alt="" aria-hidden="true" />
          </CartIconWrapper>
        </CartLink>
      </HeaderInner>
    </HeaderBar>
  )
}