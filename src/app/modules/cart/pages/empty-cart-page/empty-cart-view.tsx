import { ButtonRoot } from '@/app/ui/button/button'
import emptyCart from '@/shared/assets/images/empty-cart.svg'

import {
  EmptyCartCard,
  EmptyCartCardActions,
  EmptyCartCardImage,
  EmptyCartCardTitle,
} from '../../components/empty-cart-card/empty-cart-card'
import { EmptyCartCardSeparator } from '../../components/empty-cart-card/empty-cart-card-styles'

type Props = { onBack: () => void }

export const EmptyCartView = ({ onBack }: Props) => (
  <EmptyCartCard>
    <EmptyCartCardTitle>
      {'Parece que não há nada por aqui :('}
    </EmptyCartCardTitle>
    <EmptyCartCardImage src={emptyCart} alt="Ilustração de recarregar página" />
    <EmptyCartCardSeparator />
    <EmptyCartCardActions>
      <ButtonRoot onClick={onBack} textCase="capitalize">
        recarregar página
      </ButtonRoot>
    </EmptyCartCardActions>
  </EmptyCartCard>
)
