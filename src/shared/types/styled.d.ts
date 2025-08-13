import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
    colors: {
      background: string
      foreground: string
      cardBackground: string
      cardForeground: string
      buttonBackground: string
      buttonForeground: string
      successBackground: string
      successForeground: string
      mutedForeground: string
      border: string
      ring: string
    }
    border: {
      'rounded-full': string
      'rounded-sm': string
    }
    breakpoints: {
      sm: string
      md: string
      xl: string
    }
    typography: {
      fontSize: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
      }
      fontWeight: {
        semibold: number
        bold: number
      }
    }
  }
}