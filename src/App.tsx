import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import CookieConsent from 'react-cookie-consent'

import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { UserContextProvider } from './contexts/UserContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { COOKIE_CONSENT_STORAGE_KEY } from './constants'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <UserContextProvider>
            <ThemeContextProvider>
              <Router />

              <CookieConsent
                debug={true}
                location="bottom"
                cookieName={COOKIE_CONSENT_STORAGE_KEY}
                buttonText="Tudo bem 🍪"
                style={{
                  background: '#495BCC',
                  color: '#FFF',
                  fontSize: '1rem',
                }}
                buttonStyle={{
                  background: '#0A1033',
                  color: '#FFF',
                  fontSize: '1rem',
                  borderRadius: '5px',
                }}
                sameSite="strict"
                expires={180} // Number of days before the cookie expires
              >
                Esse site usa cookies para melhorar sua experiência.
              </CookieConsent>

              <GlobalStyle />
            </ThemeContextProvider>
          </UserContextProvider>
        </BrowserRouter>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
