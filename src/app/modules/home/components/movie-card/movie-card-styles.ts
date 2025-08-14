import styled from 'styled-components'

export const CardRoot = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.cardForeground};
  border-radius: ${({ theme }) => theme.border['rounded-sm']};
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: 328px;
  height: 324px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 338.67px;
  }
`

export const CardImage = styled.img`
  width: 147px;
  height: 188px;
  object-fit: cover;
  align-self: center;
  display: block;
`

export const CardTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.strongForeground};
  text-align: center;
`

export const CardPrice = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
`

export const CardActions = styled.div`
  margin-top: auto;
`
