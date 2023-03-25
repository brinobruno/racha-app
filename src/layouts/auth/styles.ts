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

  img {
    user-select: none;
  }

  header {
    padding: 1.15rem 0;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    a img {
      width: 9.687rem;
      height: 100%;
    }

    @media (max-width: 768px) {
      padding: 1rem 0 1.5rem;
      justify-content: center;

      a img {
        width: 8rem;
        height: 100%;
      }
    }
  }
`
