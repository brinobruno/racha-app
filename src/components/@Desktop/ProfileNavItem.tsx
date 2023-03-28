import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface IProfileNavItemProps {
  icon: ReactNode
  title: string
  link: string
}

export function ProfileNavItem({ icon, title, link }: IProfileNavItemProps) {
  return (
    <div>
      <NavLink to={link}>
        {icon}
        <span>{title}</span>
      </NavLink>
    </div>
  )
}
