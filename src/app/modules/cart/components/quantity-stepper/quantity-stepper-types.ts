import type { HTMLAttributes } from 'react'

export type QuantityStepperSize = 'sm' | 'md'

export interface QuantityStepperProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  onIncrement: () => void
  onDecrement: () => void
  min?: number
  max?: number
  disabled?: boolean
  labelledBy?: string
}
