import { forwardRef } from 'react'

import {
  EmptyCartCardActions as Actions,
  EmptyCartCardImage as Image,
  EmptyCartCardRoot,
  EmptyCartCardSeparator as Separator,
  EmptyCartCardTitle as Title,
} from './empty-cart-card-styles'
import type {
  EmptyCartCardActionsProps,
  EmptyCartCardImageProps,
  EmptyCartCardRootProps,
  EmptyCartCardSeparatorProps,
  EmptyCartCardTitleProps,
} from './empty-cart-card-types'

export const EmptyCartCard = forwardRef<HTMLDivElement, EmptyCartCardRootProps>(
  ({ children, ...rest }, ref) => (
    <EmptyCartCardRoot
      ref={ref}
      role="region"
      aria-label="Mensagem de status"
      {...rest}
    >
      {children}
    </EmptyCartCardRoot>
  ),
)
EmptyCartCard.displayName = 'EmptyCartCard.Root'

export const EmptyCartCardTitle = (props: EmptyCartCardTitleProps) => (
  <Title {...props} />
)
EmptyCartCardTitle.displayName = 'EmptyCartCard.Title'

export const EmptyCartCardImage = (props: EmptyCartCardImageProps) => (
  <Image {...props} />
)
EmptyCartCardImage.displayName = 'EmptyCartCard.Image'

export const EmptyCartCardSeparator = (props: EmptyCartCardSeparatorProps) => (
  <Separator aria-hidden="true" {...props} />
)
EmptyCartCardSeparator.displayName = 'EmptyCartCard.Separator'

export const EmptyCartCardActions = (props: EmptyCartCardActionsProps) => (
  <Actions {...props} />
)
EmptyCartCardActions.displayName = 'EmptyCartCard.Actions'
