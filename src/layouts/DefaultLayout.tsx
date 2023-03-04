import { Outlet } from 'react-router-dom'
import { Header } from './default/header'

export function DefaultLayout() {
  return (
    <>
      <Header />

      {/* Space for content, specific to every page */}
      <Outlet />

      {/* <footer>Footer</footer> */}
    </>
  )
}
