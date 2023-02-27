import { ReactNode, createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/light'

interface IThemeContext {
  theme?: unknown | null
  isLightTheme: string
  setIsLightTheme: (theme: string) => void
}

interface IThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as IThemeContext)

export const ThemeContextProvider = ({
  children,
}: IThemeContextProviderProps) => {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const theme = localStorage.getItem('theme')

    if (theme === 'light') {
      return 'light'
    } else {
      return 'dark'
    }
  })

  return (
    <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
      <ThemeProvider
        theme={isLightTheme === 'light' ? lightTheme : defaultTheme}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const { isLightTheme, setIsLightTheme } = useContext(ThemeContext)

  function changeTheme() {
    if (isLightTheme === 'light') {
      setIsLightTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
    if (isLightTheme === 'dark') {
      setIsLightTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return {
    isLightTheme,
    changeTheme,
  }
}
