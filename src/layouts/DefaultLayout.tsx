import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <header>Header</header>

      {/* Space for content, specific to every page */}
      <Outlet />

      <footer>Footer</footer>
    </>
  )
}
