import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: calc(100vh - 6rem);

  h1 {
    font-size: 3.5rem;
    line-height: 4.375rem;

    text-align: center;

    max-width: 32rem;
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

  button {
    width: 100%;
  }

  a {
    font-weight: 600;
  }
`
