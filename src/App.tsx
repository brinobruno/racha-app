import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { ThemeContextProvider } from './contexts/ThemeContext'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeContextProvider>
            <Router />
            <GlobalStyle />
          </ThemeContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}
