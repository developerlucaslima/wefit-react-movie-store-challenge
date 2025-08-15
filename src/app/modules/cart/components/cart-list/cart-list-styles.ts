import styled from 'styled-components'

const IMG_W = '91px'
const TITLE_W = '189px'
const GAP = '16px'
const ACTIONS_W = '30px'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.border['rounded-sm']};
`

export const Header = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: ${GAP};

    color: ${({ theme }) => theme.colors.mutedForeground};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    text-transform: uppercase;
  }
`

export const Th = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &.product {
      flex: 0 0 calc(${IMG_W} + ${GAP} + ${TITLE_W});
      min-width: 0;
    }

    &.qtySub {
      flex: 1 1 auto;
      display: flex;
      gap: ${GAP};

      > span {
        flex: 1 1 50%;
        max-width: 50%;
        text-align: left;
        text-transform: uppercase;
      }
    }

    &.actions {
      flex: 0 0 calc(${ACTIONS_W} + ${GAP});
    }
  }
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.mutedForeground};
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  gap: 24px;

  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
    min-width: 220px;
  }

  .label {
    color: ${({ theme }) => theme.colors.mutedForeground};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .value {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    white-space: nowrap;
  }
`

export const FooterActions = styled.div`
  order: 2;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`
