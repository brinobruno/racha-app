import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/account">Account</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
