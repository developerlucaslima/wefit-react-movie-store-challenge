import { ButtonRoot } from '@/app/ui/button/button'
import successImg from '@/shared/assets/images/checkout-success.svg'

import { CheckoutCard } from '../../components/checkout-card/checkout-card'
import {
  CheckoutCardActions,
  CheckoutCardImage,
  CheckoutCardTitle,
} from '../../components/checkout-card/checkout-card-styles'

type Props = { onBack: () => void }

export const CheckoutSuccessView = ({ onBack }: Props) => (
  <CheckoutCard>
    <CheckoutCardTitle>Compra realizada com sucesso!</CheckoutCardTitle>
    <CheckoutCardImage src={successImg} alt="Ilustração de compra concluída" />
    <CheckoutCardActions>
      <ButtonRoot onClick={onBack}>Voltar</ButtonRoot>
    </CheckoutCardActions>
  </CheckoutCard>
)
