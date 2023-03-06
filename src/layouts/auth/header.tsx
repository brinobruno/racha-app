import { NavLink } from 'react-router-dom'
import logoWhite from './../../assets/logo-white.svg'

export function Header() {
  return (
    <>
      <header>
        <NavLink to="/" title="Inicio">
          <img src={logoWhite} alt="Início" />
        </NavLink>
      </header>
    </>
  )
}
