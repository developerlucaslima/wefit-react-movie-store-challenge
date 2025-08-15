import spinner from '@/shared/assets/ui/spinner.svg'

import { SpinnerContainer, SpinnerIcon } from './spinner-styles'

export const SpinnerRoot = () => (
  <SpinnerContainer role="status" aria-label="Carregando">
    <SpinnerIcon src={spinner} alt="" aria-hidden />
  </SpinnerContainer>
)
