import styled from 'styled-components'

const ICON_SIZE = '18px'

export const StepperRoot = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 11px;
`

export const IconButton = styled.button`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${ICON_SIZE};
  height: ${ICON_SIZE};

  background: transparent;

  cursor: pointer;
  user-select: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring};
    border-color: ${({ theme }) => theme.colors.ring};
  }
`

export const ValueBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.border['rounded-sm']};

  color: ${({ theme }) => theme.colors.cardForeground};

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: 1;

  width: 59px;
  height: 26px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 62px;
  }
`
