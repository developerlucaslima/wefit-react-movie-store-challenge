import { forwardRef } from 'react'

import decrementIcon from '@/shared/assets/icons/decrement-icon.svg'
import incrementIcon from '@/shared/assets/icons/increment-icon.svg'
import { handleArrowKeys } from '@/shared/utils/on-key-down/on-arrow-keys'

import { IconButton, StepperRoot, ValueBox } from './quantity-stepper-styles'
import type { QuantityStepperProps } from './quantity-stepper-types'

const QuantityStepper = forwardRef<HTMLDivElement, QuantityStepperProps>(
  (
    {
      value,
      onIncrement,
      onDecrement,
      min = 1,
      max,
      disabled = false,
      labelledBy,
      ...rest
    },
    ref,
  ) => {
    const decrementDisabled = disabled || value <= min
    const incrementDisabled =
      disabled || (typeof max === 'number' && value >= max)
    const ariaLabelInc = `Aumentar quantidade para ${value + 1}`
    const ariaLabelDec = `Diminuir quantidade para ${value - 1}`

    return (
      <StepperRoot
        ref={ref}
        role="group"
        aria-labelledby={labelledBy}
        onKeyDown={(e) =>
          handleArrowKeys(e, {
            disabled,
            onIncrement,
            onDecrement,
            incrementDisabled,
            decrementDisabled,
          })
        }
        tabIndex={0}
        {...rest}
      >
        <IconButton
          type="button"
          aria-label={ariaLabelDec}
          onClick={onDecrement}
          disabled={decrementDisabled}
        >
          <img src={decrementIcon} alt="" aria-hidden="true" />
        </IconButton>

        <ValueBox
          role="status"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`Quantidade atual ${value}`}
        >
          {value}
        </ValueBox>

        <IconButton
          type="button"
          aria-label={ariaLabelInc}
          onClick={onIncrement}
          disabled={incrementDisabled}
        >
          <img src={incrementIcon} alt="" aria-hidden="true" />
        </IconButton>
      </StepperRoot>
    )
  },
)
QuantityStepper.displayName = 'QuantityStepper'

export { QuantityStepper }
