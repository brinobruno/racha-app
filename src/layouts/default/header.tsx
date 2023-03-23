import { NavLink } from 'react-router-dom'

import LogoWhite from 'src/assets/logo-white.svg'
import ProfilePic from 'src/assets/profile-pic.png'
import { HeaderContainer, Logo, NavBar, ProfileItem } from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <NavLink to="/">
            <img src={LogoWhite} alt="Início" />
          </NavLink>
        </Logo>

        <NavBar>
          <ul>
            <li>
              <NavLink to="/">Início</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/account">Account</NavLink>
            </li>
          </ul>
        </NavBar>

        <ProfileItem>
          <img src={ProfilePic} alt="Perfil" />
        </ProfileItem>
      </HeaderContainer>
    </>
  )
}
