import { Outlet } from 'react-router-dom'

import { Header } from './header'
import { Footer } from './footer'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        {/* Space for content, specific to every page */}
        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  )
}
