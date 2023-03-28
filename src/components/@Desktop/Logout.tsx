import { SignOut } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'

export function Logout() {
  const currentTheme = useTheme()

  return (
    <div>
      <NavLink to="/account">
        <SignOut weight="bold" color={currentTheme['primary-500']} size={24} />
        <span>Sair</span>
      </NavLink>
    </div>
  )
}
