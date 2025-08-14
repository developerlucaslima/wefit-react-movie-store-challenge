import { type HTMLAttributes, type ImgHTMLAttributes } from 'react'

export interface MovieCardRootProps extends HTMLAttributes<HTMLDivElement> {
  labelledBy?: string
}

export interface MovieCardImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'decoding'> {
  alt: string
}

export type MovieCardTitleProps = HTMLAttributes<HTMLHeadingElement>

export interface MovieCardPriceProps
  extends HTMLAttributes<HTMLParagraphElement> {
  amount: number
}
