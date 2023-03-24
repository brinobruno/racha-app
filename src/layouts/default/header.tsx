import { useRef, useEffect, useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { User, SignOut } from 'phosphor-react'

import LogoWhite from 'src/assets/logo-white.svg'
import ProfilePic from 'src/assets/profile-pic.png'
import {
  HeaderContainer,
  HeaderItems,
  Logo,
  NavBar,
  ProfileItem,
  ProfileMenu,
  ToggleProfileMenuButton,
} from './styles'

export function Header() {
  const currentTheme = useTheme()

  const handleToggleProfileMenu = (state: boolean) => !state

  const [isProfileMenuActive, dispatch] = useReducer(
    handleToggleProfileMenu,
    false,
  )

  const profileMenuRef = useRef<HTMLDivElement>(null)
  const profileItemRef = useRef<HTMLDivElement>(null)

  function isClickOutsideProfileMenu(event: MouseEvent) {
    const isClickInsideProfileMenu = profileMenuRef.current?.contains(
      event.target as Node,
    )
    const isClickInsideProfileItem = profileItemRef.current?.contains(
      event.target as Node,
    )
    return !isClickInsideProfileMenu && !isClickInsideProfileItem
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isProfileMenuActive && isClickOutsideProfileMenu(event)) {
        dispatch()
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [isProfileMenuActive])

  return (
    <>
      <HeaderContainer>
        <HeaderItems>
          <Logo>
            <NavLink to="/">
              <img src={LogoWhite} alt="Início" />
            </NavLink>
          </Logo>

          <NavBar>
            <ul>
              <li>
                <NavLink to="/dashboard">Início</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Meus times</NavLink>
              </li>
              <li>
                <NavLink to="/account">Minha conta</NavLink>
              </li>
            </ul>
          </NavBar>

          <ProfileItem ref={profileItemRef}>
            <ToggleProfileMenuButton onClick={dispatch}>
              <img src={ProfilePic} alt="Perfil" />
            </ToggleProfileMenuButton>

            <ProfileMenu
              className={isProfileMenuActive ? 'active' : ''}
              ref={profileMenuRef}
            >
              <ul>
                <li>
                  <NavLink to="/account">
                    {' '}
                    <User
                      weight="bold"
                      color={currentTheme['secondary-500']}
                      size={24}
                    />
                    <span>Minha conta</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/account">
                    <SignOut
                      weight="bold"
                      color={currentTheme['primary-500']}
                      size={24}
                    />
                    <span>Sair</span>
                  </NavLink>
                </li>
              </ul>
            </ProfileMenu>
          </ProfileItem>
        </HeaderItems>
      </HeaderContainer>
    </>
  )
}
