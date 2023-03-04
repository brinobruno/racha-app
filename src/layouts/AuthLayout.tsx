import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <header>Auth</header>

      {/* Space for content, specific to every page */}
      <Outlet />

      <footer>Footer</footer>
    </>
  )
}
