import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1180px) {
    padding: 0 3.125rem;
  }

  @media (max-width: 350px) {
    padding: 0 1.5rem;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6rem;

  > div {
    width: 100%;
    max-width: 200px;
  }
`

export const NavBar = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 32px;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
  max-height: 56px;

  img {
    height: 100%;
    max-height: 56px;
  }
`

export const ProfileItem = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  img {
    height: 100%;
    max-height: 56px;
  }
`
