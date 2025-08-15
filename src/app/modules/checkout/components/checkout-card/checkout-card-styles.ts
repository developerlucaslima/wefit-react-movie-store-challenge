import styled from 'styled-components'

export const CheckoutCardRoot = styled.section`
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.cardForeground};
  border-radius: ${({ theme }) => theme.border['rounded-sm']};
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 0 16px 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 102px;
  }
`

export const CheckoutCardTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.strongForeground};
  width: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

export const CheckoutCardImage = styled.img`
  width: min(100%, 238px);
  height: auto;
  display: block;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(100%, 294.96px);
  }
`

export const CheckoutCardActions = styled.div`
  width: 173px;
  display: flex;
  justify-content: center;
`
