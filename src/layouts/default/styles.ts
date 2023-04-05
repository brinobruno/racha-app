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
  height: 5.25rem;

  background-color: ${(props) => props.theme['secondary-accent']};

  position: sticky;
  top: 0;
  z-index: 100;
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
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: ${(props) => props.theme['nav-50']};
    font-weight: 700;

    transition: color 0.1s ease-in-out, border-bottom 0.1s ease-in-out;

    &.active {
      color: ${(props) => props.theme['neutral-100']};
      border-bottom: 2px solid ${(props) => props.theme['primary-500']};
      margin-top: 1.96rem;
      padding-bottom: 1.96rem;
    }

    &:hover {
      color: ${(props) => props.theme['neutral-100']};
    }
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;

  height: 100%;
  max-height: 3rem;

  img {
    height: 100%;
    max-height: 3rem;
  }
`

export const ProfileItem = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;
`

export const ToggleProfileMenuButton = styled.button`
  background: none;
  padding: 0;

  max-width: 3.5rem;
  max-height: 3.5rem;

  &:hover {
    background: none;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;

    clip-path: circle();
    object-fit: cover;

    padding: 2px;
    border: 2px solid ${(props) => props.theme['neutral-100']};

    border-radius: 100%;
    background-size: cover;
    background-clip: content-box;
  }
`

export const ProfileMenu = styled.div`
  position: absolute;
  top: calc(100% + 1.75rem);
  width: 16rem;

  background-color: ${(props) => props.theme['secondary-accent']};

  border-radius: 5px;
  padding-bottom: 1.5rem;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.2s ease 0s, visibility 0.2s ease 0s;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 20px;

    width: 0;
    height: 0;

    border-style: solid;
    border-width: 0px 0.5rem 0.5rem;
    border-color: transparent transparent
      ${(props) => props.theme['secondary-accent']};
  }

  div {
    padding: 0.75rem 1.5rem;

    font-weight: 600;
    color: ${(props) => props.theme['neutral-200']};

    cursor: pointer;

    &:first-child {
      padding: 1rem 1.5rem;
    }

    &:hover {
      background-color: ${(props) => props.theme['secondary-accent-hover']};
    }

    a,
    button {
      display: flex;
      align-items: center;

      width: 100%;

      span {
        margin-left: 1.5rem;
      }
    }

    button {
      background: unset;
      color: unset;
      padding: unset;
      font-size: unset;
    }
  }
`
