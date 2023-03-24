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
import { useReducer } from 'react'

type Action = {
  type: 'TOGGLE_PROFILE_MENU'
}

const handleOpenProfileMenu = (state: boolean) => !state

function reducer(state: boolean, action: Action): boolean {
  if (action.type === 'TOGGLE_PROFILE_MENU') {
    return handleOpenProfileMenu(state)
  } else {
    return state
  }
}

export function Header() {
  const [isProfileMenuActive, dispatch] = useReducer(reducer, false)

  const handleToggleMenu = () => {
    dispatch({ type: 'TOGGLE_PROFILE_MENU' })
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
            <ToggleProfileMenuButton onClick={handleToggleMenu}>
              <img src={ProfilePic} alt="Perfil" />
            </ToggleProfileMenuButton>

            <ProfileMenu className={isProfileMenuActive ? 'active' : ''}>
              <p>a</p>
            </ProfileMenu>
          </ProfileItem>
        </HeaderItems>
      </HeaderContainer>
    </>
  )
}
