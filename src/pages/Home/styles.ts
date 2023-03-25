import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: calc(100vh - 6.25rem);

  @media (max-width: 768px) {
    justify-content: unset;
    flex-direction: column;

    img {
      max-width: 100%;
    }
  }

  h1 {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;

    font-size: 3.5rem;
    line-height: 4.375rem;

    text-align: center;

    max-width: 32rem;
    padding-bottom: 2.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 41px;

      padding: 1.75rem 0 1.875rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  max-width: 17rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  button {
    width: 100%;
  }

  a {
    width: 100%;
    font-weight: 600;
  }
`
