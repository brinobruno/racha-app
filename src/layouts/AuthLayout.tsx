import { Outlet } from 'react-router-dom'
import { Header } from './auth/header'

export function AuthLayout() {
  return (
    <>
      <Header />

      {/* Space for content, specific to every page */}
      <Outlet />

      {/* <footer>Footer</footer> */}
    </>
  )
}
