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
  height: 6rem;

  background-color: ${(props) => props.theme['secondary-accent']};

  position: sticky;
  top: 0;
`

export const HeaderItems = styled.div`
  max-width: 68rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1180px) {
    padding: 0 3.125rem;
  }

  @media (max-width: 350px) {
    padding: 0 1.5rem;
  }

  > div {
    width: 100%;
    max-width: 12.5rem;
  }
`

export const NavBar = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 2rem;

    li a {
      color: ${(props) => props.theme['nav-50']};
      font-weight: 700;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
  max-height: 3rem;

  img {
    height: 100%;
    max-height: 3rem;
  }
`

export const ProfileItem = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  position: relative;

  img {
    height: 100%;
    max-height: 3.5rem;
  }
`

export const ProfileOptions = styled.div`
  position: absolute;
  top: calc(100% + 1.5rem);
  width: 200px;
  background-color: ${(props) => props.theme['secondary-accent']};
`
