import { forwardRef } from 'react'

import {
  CheckoutCardActions as Actions,
  CheckoutCardImage as Image,
  CheckoutCardRoot as Root,
  CheckoutCardTitle as Title,
} from './checkout-card-styles'
import type {
  CheckoutCardActionsProps,
  CheckoutCardImageProps,
  CheckoutCardRootProps,
  CheckoutCardTitleProps,
} from './checkout-card-types'

export const CheckoutCard = forwardRef<HTMLDivElement, CheckoutCardRootProps>(
  ({ children, ...rest }, ref) => (
    <Root ref={ref} role="region" aria-label="Mensagem de status" {...rest}>
      {children}
    </Root>
  ),
)
CheckoutCard.displayName = 'CheckoutCard.Root'

export const CheckoutCardTitle = (props: CheckoutCardTitleProps) => (
  <Title {...props} />
)
CheckoutCardTitle.displayName = 'CheckoutCard.Title'

export const CheckoutCardImage = (props: CheckoutCardImageProps) => (
  <Image {...props} />
)
CheckoutCardImage.displayName = 'CheckoutCard.Image'

export const CheckoutCardActions = (props: CheckoutCardActionsProps) => (
  <Actions {...props} />
)
CheckoutCardActions.displayName = 'CheckoutCard.Actions'
