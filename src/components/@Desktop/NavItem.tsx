import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface INavItemProps {
  icon: ReactNode
  title: string
  link: string
}

export function NavItem({ icon, title, link }: INavItemProps) {
  return (
    <div>
      <NavLink to={link}>
        {icon}
        <span>{title}</span>
      </NavLink>
    </div>
  )
}
