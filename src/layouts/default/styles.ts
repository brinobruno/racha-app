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
  height: 100%;
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

      transition: color 0.1s ease-in-out, border-bottom 0.1s ease-in-out;

      &.active {
        color: ${(props) => props.theme['neutral-100']};
        border-bottom: 2px solid ${(props) => props.theme['primary-500']};
        padding-bottom: 2.25rem;
      }
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

export const ToggleProfileMenuButton = styled.button`
  background: none;
  padding: 0;

  &:hover {
    background: none;
  }
`

export const ProfileMenu = styled.div`
  position: absolute;
  top: calc(100% + 1.5rem);
  width: 200px;
  background-color: ${(props) => props.theme['secondary-accent']};

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.2s ease 0s, visibility 0.2s ease 0s;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`
