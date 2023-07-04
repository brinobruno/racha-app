import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - 6.25rem);

  padding-top: 2.375rem;

  h1 {
    font-family: 'Rajdhani', sans-serif;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.825rem;

    max-width: 17rem;
    text-align: center;
    padding-bottom: 2rem;
  }

  > div {
    margin-top: 4rem;
  }

  div a {
    font-weight: 600;
  }
`
