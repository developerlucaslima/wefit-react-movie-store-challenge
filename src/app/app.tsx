// import { QueryClientProvider } from '@tanstack/react-query'
// import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/shared/styles/global'
import { theme } from '@/shared/styles/themes'
// import { queryClient } from './lib/react-query'
// import { router } from './routes/router'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider> */}
    </ThemeProvider>
  )
}