import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
} from 'react'

export interface CartItemCardRootProps extends HTMLAttributes<HTMLElement> {
  labelledBy?: string
}

export interface CartItemImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'decoding'> {
  alt: string
}

export type CartItemInfoProps = HTMLAttributes<HTMLDivElement>

export type CartItemTitleProps = HTMLAttributes<HTMLHeadingElement>

export interface CartItemUnitPriceProps
  extends HTMLAttributes<HTMLParagraphElement> {
  amount: number
}

export interface CartItemSubtotalProps
  extends HTMLAttributes<HTMLParagraphElement> {
  amount: number
}

export type CartItemRemoveButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
