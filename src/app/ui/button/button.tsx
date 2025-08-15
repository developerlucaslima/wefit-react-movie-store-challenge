import { forwardRef } from 'react'

import {
  ButtonIcon,
  CountText,
  IconCountWrapper,
  StyledButton,
} from './button-styles'
import type { ButtonIconCountProps, ButtonProps } from './button-types'

const ButtonRoot = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      fullWidth = true,
      textCase = 'uppercase',
      type = 'button',
      ...rest
    },
    ref,
  ) => (
    <StyledButton
      ref={ref}
      type={type}
      $variant={variant}
      $fullWidth={fullWidth}
      $textCase={textCase}
      {...rest}
    />
  ),
)
ButtonRoot.displayName = 'Button.Root'

const ButtonIconCount = ({ count, alt = '', ...img }: ButtonIconCountProps) => {
  return (
    <IconCountWrapper role="status" aria-live="polite" aria-atomic="true">
      <ButtonIcon
        alt={alt}
        aria-hidden={alt === '' ? true : undefined}
        {...img}
      />
      <CountText>{count}</CountText>
    </IconCountWrapper>
  )
}
ButtonIconCount.displayName = 'Button.IconCount'

export { ButtonIconCount, ButtonRoot }
