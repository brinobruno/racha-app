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
