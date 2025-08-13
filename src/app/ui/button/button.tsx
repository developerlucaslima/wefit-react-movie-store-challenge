import { forwardRef } from 'react'

import { ButtonIcon, CountText,IconCountWrapper, StyledButton } from './button-styles'
import type { ButtonIconCountProps,ButtonProps } from './button-types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { 
      variant = 'primary', 
      fullWidth = true, 
      type = 'button', 
      ...rest 
    }
    , ref) => (
    <StyledButton 
      ref={ref} 
      type={type} 
      $variant={variant} 
      $fullWidth={fullWidth} 
      {...rest} 
    />
  )
)

const ButtonIconCount = ({ 
    count, 
    ...img 
  }: ButtonIconCountProps) => {
  return (
    <IconCountWrapper>
      <ButtonIcon 
        alt=""
        aria-hidden="true"
        {...img} 
      />
      
      <CountText aria-live="polite" aria-atomic="true">
        {count}
      </CountText>
    </IconCountWrapper>
  )
}

export { Button, ButtonIconCount }