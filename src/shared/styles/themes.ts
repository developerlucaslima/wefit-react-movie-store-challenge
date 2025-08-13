import type { DefaultTheme } from 'styled-components/dist/types'

export const theme: DefaultTheme = {
  colors: {
    background: '#2F2E41',
    foreground: '#FFFFFF',
    cardBackground: '#FFFFFF',
    cardForeground: '#2F2E41',
    buttonBackground: '#009EDD',
    buttonForeground: '#FFFFFF',
    successBackground: '#039B00',
    successForeground: '#FFFFFF',
    mutedForeground: '#999999',
    border: '#D9D9D9',
    ring: '#D9D9D9',
  },
  border: {
    'rounded-full': '9999px',
    'rounded-sm': '4px',
  },
  breakpoints: {
    sm: '360px',
    md: '768px',
    xl: '1440px',
  },
  typography: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '24px',
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },
  },
}