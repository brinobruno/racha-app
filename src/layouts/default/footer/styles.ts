import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${(props) => props.theme['secondary-accent']};
`

export const WidthWrapper = styled.div`
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
