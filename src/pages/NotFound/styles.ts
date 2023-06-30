import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 5.6rem);
`

export const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 70%;
`

export const Illustration = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font: 700 4rem/100% 'Montserrat';
  }

  span {
    display: inline-block;
    margin: 0.5rem 0 2rem;
  }

  button {
  }
`
