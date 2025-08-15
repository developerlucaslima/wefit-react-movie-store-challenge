import { useCheckoutSuccess } from '../../hooks/use-checkout-success'
import { CheckoutSuccessView } from './checkout-success-view'

export const CheckoutPage = () => {
  const { handleOnBack } = useCheckoutSuccess()
  return <CheckoutSuccessView onBack={handleOnBack} />
}
