// import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'

import { queryClient } from '@/shared/lib/react-query'
import { GlobalStyle } from '@/shared/styles/global'
import { theme } from '@/shared/styles/themes'


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        {/* <RouterProvider router={router} /> */}
      </QueryClientProvider>
    </ThemeProvider>
  )
}