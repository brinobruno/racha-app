import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/light'

interface IThemeContext {
  theme: string
  toggleTheme: () => void
}

interface IThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => {},
})

export const ThemeContextProvider = ({
  children,
}: IThemeContextProviderProps) => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('theme')
    return localTheme || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : defaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = (): IThemeContext => useContext(ThemeContext)
