import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { LayoutContainer } from './styles'

export function AuthLayout() {
  return (
    <>
      <LayoutContainer>
        <Header />

        {/* Space for content, specific to every page */}
        <Outlet />

        {/* <footer>Footer</footer> */}
      </LayoutContainer>
    </>
  )
}
