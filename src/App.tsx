import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { UserContextProvider } from './contexts/UserContext'
import { ThemeContextProvider } from './contexts/ThemeContext'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <UserContextProvider>
            <ThemeContextProvider>
              <Router />
              <GlobalStyle />
            </ThemeContextProvider>
          </UserContextProvider>
        </BrowserRouter>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
