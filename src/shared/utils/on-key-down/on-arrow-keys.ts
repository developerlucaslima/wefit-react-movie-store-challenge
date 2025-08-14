import type { KeyboardEvent } from 'react'

interface ArrowKeysHandlerOptions {
  disabled?: boolean
  onIncrement?: () => void
  onDecrement?: () => void
  incDisabled?: boolean
  decDisabled?: boolean
}

export function handleArrowKeys<T = HTMLElement>(
  e: KeyboardEvent<T>,
  {
    disabled,
    onIncrement,
    onDecrement,
    incDisabled,
    decDisabled,
  }: ArrowKeysHandlerOptions,
) {
  if (disabled) return

  if (e.key === 'ArrowUp') {
    if (!incDisabled) onIncrement?.()
    e.preventDefault()
  } else if (e.key === 'ArrowDown') {
    if (!decDisabled) onDecrement?.()
    e.preventDefault()
  }
}
