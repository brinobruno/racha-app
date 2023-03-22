import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from 'src/styles/themes/default'
import { lightTheme } from 'src/styles/themes/light'
import { THEME_PREFERENCE_STORAGE_KEY } from 'src/constants'

interface IThemeContext {
  theme: string
  toggleTheme: () => void
}

interface IThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'dark',
  toggleTheme: () => {},
})

export const ThemeContextProvider = ({
  children,
}: IThemeContextProviderProps) => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem(THEME_PREFERENCE_STORAGE_KEY)
    return localTheme || 'dark'
  })

  useEffect(() => {
    localStorage.setItem(THEME_PREFERENCE_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'dark' ? defaultTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = (): IThemeContext => useContext(ThemeContext)
