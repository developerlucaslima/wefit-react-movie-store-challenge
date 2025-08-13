import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }

  html {
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100dvh;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.ring};
    outline-offset: 2px;
  }

  button, input, select, textarea { font: inherit; color: inherit; }

  ul, ol { margin: 0; padding: 0; list-style: none; }
  li { margin: 0; padding: 0; }

  a { color: inherit; text-decoration-skip-ink: auto; }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`
