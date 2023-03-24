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

const handleOpenProfileMenu = (state: boolean) => !state

export function Header() {
  const [isProfileMenuActive, dispatch] = useReducer(
    handleOpenProfileMenu,
    false,
  )

  const profileMenuRef = useRef<HTMLDivElement>(null)
  const profileItemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const profileMenuNode = profileMenuRef.current
      const profileItemNode = profileItemRef.current

      if (isProfileMenuActive && profileMenuNode && profileItemNode) {
        const isClickInsideProfileMenuOrItem =
          profileMenuNode.contains(event.target as Node) ||
          profileItemNode.contains(event.target as Node)

        if (!isClickInsideProfileMenuOrItem) dispatch()
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
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
