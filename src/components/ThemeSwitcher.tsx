import { useTheme } from 'styled-components'
import { Moon, Sun } from 'phosphor-react'

import { useThemeContext } from 'src/contexts/ThemeContext'

export function ThemeSwitcher() {
  const currentTheme = useTheme()
  const { theme, toggleTheme } = useThemeContext()

  return theme === 'light' ? (
    <button onClick={toggleTheme}>
      <Moon weight="bold" color={currentTheme['secondary-500']} size={24} />
      <span>Modo escuro</span>
    </button>
  ) : (
    <button onClick={toggleTheme}>
      <Sun weight="bold" color={currentTheme['secondary-500']} size={24} />
      <span>Modo claro</span>
    </button>
  )
}
