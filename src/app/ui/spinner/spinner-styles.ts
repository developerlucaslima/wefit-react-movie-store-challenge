import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const SpinnerIcon = styled.img`
  width: 55.41px;
  height: 55.41px;
  display: block;
  animation: ${spin} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 62.25px;
    height: 62.25px;
  }
`
