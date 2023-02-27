import { BrowserRouter } from 'react-router-dom'

import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { ThemeContextProvider } from './contexts/ThemeContext'

export function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Router />
          <GlobalStyle />
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}
