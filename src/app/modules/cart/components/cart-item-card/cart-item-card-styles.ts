import styled from 'styled-components'

const ICON_WIDTH = '16px'
const ICON_HEIGHT = '18px'

export const Root = styled.article`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.cardForeground};
  width: 100%;
`

export const Image = styled.img`
  width: 64px;
  height: 82px;
  object-fit: cover;
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 91px;
    height: 114px;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 0;
  gap: 16px;
  margin-top: 3px;
  margin-bottom: 3px;
`

export const Row = styled.div`
  margin-top: 1.5px;
  margin-bottom: 1.5px;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-width: 0;
`

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  flex: 100%;
  max-width: 102px;
  min-width: 0;
  word-break: break-word;
  overflow-wrap: anywhere;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

export const UnitPrice = styled.p`
  margin: 0;
  padding: 0;
  flex: 1 1 auto;
  text-align: end;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

export const RemoveButton = styled.button`
  all: unset;
  cursor: pointer;
  display: block;

  width: ${ICON_WIDTH};
  height: ${ICON_HEIGHT};
  display: block;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring};
  }
`

export const Subtotal = styled.div`
  text-align: right;
  min-width: 120px;
  margin-right: 32px;
  flex: 1 1 auto;
  text-align: end;

  .label {
    color: ${({ theme }) => theme.colors.mutedForeground};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    text-transform: uppercase;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }

  .value {
    display: block;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`
