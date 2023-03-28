import { useRef, useEffect, useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Bookmarks, User } from 'phosphor-react'

import LogoBlack from 'src/assets/logo-black.svg'
import LogoWhite from 'src/assets/logo-white.svg'
import ProfilePic from 'src/assets/profile-pic.png'
import { useThemeContext } from 'src/contexts/ThemeContext'
import { ThemeSwitcher } from 'src/components/ThemeSwitcher'
import { ProfileNavItem } from 'src/components/@Desktop/ProfileNavItem'
import { Logout } from 'src/components/@Desktop/Logout'
import {
  HeaderContainer,
  HeaderItems,
  Logo,
  NavBar,
  ProfileItem,
  ProfileMenu,
  ToggleProfileMenuButton,
} from './styles'

const handleToggleProfileMenu = (state: boolean) => !state

export function Header() {
  const currentTheme = useTheme()
  const { theme } = useThemeContext()

  const profileMenuRef = useRef<HTMLDivElement>(null)
  const profileItemRef = useRef<HTMLDivElement>(null)

  const [isProfileMenuActive, dispatch] = useReducer(
    handleToggleProfileMenu,
    false,
  )

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isProfileMenuActive && isClickOutsideProfileMenu(event)) {
        dispatch()
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [isProfileMenuActive])

  function isClickOutsideProfileMenu(event: MouseEvent) {
    const isClickInsideProfileMenu = profileMenuRef.current?.contains(
      event.target as Node,
    )
    const isClickInsideProfileItem = profileItemRef.current?.contains(
      event.target as Node,
    )
    return !isClickInsideProfileMenu && !isClickInsideProfileItem
  }

  return (
    <HeaderContainer>
      <HeaderItems>
        <Logo>
          <NavLink to="/">
            <img src={theme === 'light' ? LogoBlack : LogoWhite} alt="Início" />
          </NavLink>
        </Logo>

        <NavBar>
          <NavLink to="/dashboard">Início</NavLink>

          <NavLink to="/teams">Meus times</NavLink>

          <NavLink to="/account">Minha conta</NavLink>
        </NavBar>

        <ProfileItem ref={profileItemRef}>
          <ToggleProfileMenuButton onClick={dispatch}>
            <img src={ProfilePic} alt="Perfil" />
          </ToggleProfileMenuButton>

          <ProfileMenu
            className={isProfileMenuActive ? 'active' : ''}
            ref={profileMenuRef}
          >
            <ProfileNavItem
              icon={
                <User
                  color={currentTheme['secondary-500']}
                  weight="bold"
                  size={24}
                />
              }
              title="Minha conta"
              link="/account"
            />

            <ProfileNavItem
              icon={
                <Bookmarks
                  color={currentTheme['secondary-500']}
                  weight="bold"
                  size={24}
                />
              }
              title="Meus times"
              link="/teams"
            />

            <ThemeSwitcher />

            <Logout />
          </ProfileMenu>
        </ProfileItem>
      </HeaderItems>
    </HeaderContainer>
  )
}
