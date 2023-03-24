import { NavLink } from 'react-router-dom'
import { useRef, useEffect, useReducer } from 'react'
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
              <p>a</p>
            </ProfileMenu>
          </ProfileItem>
        </HeaderItems>
      </HeaderContainer>
    </>
  )
}
