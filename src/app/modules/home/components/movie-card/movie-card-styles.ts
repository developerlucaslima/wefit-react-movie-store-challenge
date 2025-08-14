import styled from 'styled-components'

export const CardRoot = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.cardForeground};
  border-radius: ${({ theme }) => theme.border['rounded-sm']};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 338.67px;
  height: 324px;
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
`

export const CardPrice = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

export const CardActions = styled.div`
  margin-top: auto;
`
