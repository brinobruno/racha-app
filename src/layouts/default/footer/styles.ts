import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${(props) => props.theme['secondary-accent']};
  font-weight: 600;

  padding: 3rem 0 3.5rem;
`

export const WidthWrapper = styled.div`
  height: 100%;
  max-width: 68rem;
  margin: 0 auto 3rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  hr {
    width: 100%;
    border: 1px solid ${(props) => props.theme['neutral-500']};
    opacity: 0.5;
  }

  @media (max-width: 1180px) {
    padding: 0 3.125rem;
  }

  @media (max-width: 350px) {
    padding: 0 1.5rem;
  }
`

export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 6.25rem;
  }

  span {
    display: inline-block;
    max-width: 18rem;
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      transition: 0.2s ease-in-out;
      font-weight: 700;
    }

    a:hover {
      color: ${(props) => props.theme['primary-500']};
    }
  }
`

export const DownloadAppContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.375rem;

  span {
    display: inline-block;
    padding-bottom: 1rem;
  }
`

export const DownloadAppBadge = styled.img`
  width: 11rem;
`

export const LowerFooter = styled.div`
  max-width: 68rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  span {
    color: ${(props) => props.theme['neutral-500']};
  }

  @media (max-width: 1180px) {
    padding: 0 3.125rem;
  }

  @media (max-width: 350px) {
    padding: 0 1.5rem;
  }
`
