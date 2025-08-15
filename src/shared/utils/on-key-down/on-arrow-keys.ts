import type { KeyboardEvent } from 'react'

interface ArrowKeysHandlerOptions {
  disabled?: boolean
  onIncrement?: () => void
  onDecrement?: () => void
  incrementDisabled?: boolean
  decrementDisabled?: boolean
}

export function handleArrowKeys<T = HTMLElement>(
  e: KeyboardEvent<T>,
  {
    disabled,
    onIncrement,
    onDecrement,
    incrementDisabled: incDisabled,
    decrementDisabled: decDisabled,
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
