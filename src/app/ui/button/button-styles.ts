import styled, { css } from 'styled-components'

import type { ButtonVariant } from './button-types'

const ICON_SIZE = '13.6px'

export const StyledButton = styled.button<{
  $variant: ButtonVariant
  $fullWidth: boolean
}>`
  appearance: none;
  border: 0;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.border['rounded-sm']};

  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-transform: uppercase;

  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonForeground};

  ${({ $variant, theme }) =>
    $variant === 'success' &&
    css`
      background: ${theme.colors.successBackground};
      color: ${theme.colors.successForeground};
    `}

  transition: filter 0.15s ease, transform 0.02s ease;
  &:hover:not(:disabled) {
    filter: brightness(1.1);
  }
  &:active:not(:disabled) {
    transform: translateY(0.5px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.ring};
    outline-offset: 2px;
  }
`

export const IconCountWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3.4px;
`

export const ButtonIcon = styled.img`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  display: block;
`

export const CountText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`
