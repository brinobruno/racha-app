import { NavLink } from 'react-router-dom'

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
import { useState } from 'react'

export function Header() {
  const [isProfileMenuActive, setIsProfileMenuActive] = useState(false)

  const handleOpenProfileMenu = () => {
    setIsProfileMenuActive(!isProfileMenuActive)
  }

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

          <ProfileItem>
            <ToggleProfileMenuButton onClick={handleOpenProfileMenu}>
              <img src={ProfilePic} alt="Perfil" />
            </ToggleProfileMenuButton>

            {isProfileMenuActive && (
              <ProfileMenu>
                <p>a</p>
              </ProfileMenu>
            )}
          </ProfileItem>
        </HeaderItems>
      </HeaderContainer>
    </>
  )
}
