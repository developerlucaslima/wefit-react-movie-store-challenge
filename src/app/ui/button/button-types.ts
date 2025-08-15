import { type ButtonHTMLAttributes, type ImgHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'success'
export type ButtonTextCase = 'uppercase' | 'capitalize' | 'none'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
  textCase?: ButtonTextCase
}

export interface ButtonIconCountProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  count: number
  'aria-hidden'?: true
}
