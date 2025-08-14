import { forwardRef, type ReactNode } from 'react'

import { formatBRL } from '@/shared/utils/format/currency'

import {
  CardActions,
  CardImage,
  CardPrice,
  CardRoot,
  CardTitle,
} from './movie-card-styles'
import type {
  MovieCardImageProps,
  MovieCardPriceProps,
  MovieCardRootProps,
  MovieCardTitleProps,
} from './movie-card-types'

const MovieCardRoot = forwardRef<HTMLDivElement, MovieCardRootProps>(
  ({ labelledBy, children, ...rest }, ref) => (
    <CardRoot ref={ref} aria-labelledby={labelledBy} {...rest}>
      {children}
    </CardRoot>
  ),
)
MovieCardRoot.displayName = 'MovieCard.Root'

function MovieCardImage({ alt, ...img }: MovieCardImageProps) {
  return <CardImage alt={alt} loading="lazy" decoding="async" {...img} />
}
MovieCardImage.displayName = 'MovieCard.Image'

function MovieCardTitle(props: MovieCardTitleProps) {
  return <CardTitle {...props} />
}
MovieCardTitle.displayName = 'MovieCard.Title'

function MovieCardPrice({ amount, ...rest }: MovieCardPriceProps) {
  return <CardPrice {...rest}>{formatBRL(amount)}</CardPrice>
}
MovieCardPrice.displayName = 'MovieCard.Price'

function MovieCardActions({ children }: { children: ReactNode }) {
  return <CardActions>{children}</CardActions>
}
MovieCardActions.displayName = 'MovieCard.Actions'

export {
  MovieCardActions,
  MovieCardImage,
  MovieCardPrice,
  MovieCardRoot,
  MovieCardTitle,
}
