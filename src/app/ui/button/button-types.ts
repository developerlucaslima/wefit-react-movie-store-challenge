import { type ButtonHTMLAttributes, type ImgHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'success'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
}

export interface ButtonIconCountProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  count: number
  'aria-hidden'?: true
}
