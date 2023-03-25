import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  padding: 3.5rem;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    line-height: 1.5rem;
    text-align: center;

    max-width: 20.375rem;
  }

  button {
    max-width: 16rem;
    width: 100%;
  }
`
