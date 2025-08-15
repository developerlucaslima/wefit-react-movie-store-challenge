import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ICON_SIZE = '24px'

export const HeaderBar = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
`

export const HeaderInner = styled.div`
  margin: 0 auto;
  padding: 31.5px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BrandLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.ring};
    outline-offset: 2px;
  }
`

export const Brand = styled.h1`
  margin: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`

export const CartLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.ring};
    outline-offset: 2px;
  }
`

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const CartLabel = styled.span`
  display: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline;
  }
`

export const CartCount = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
`

export const CartIconWrapper = styled.span`
  width: 40px;
  height: 40px;
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const CartIcon = styled.img`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  display: block;
`
