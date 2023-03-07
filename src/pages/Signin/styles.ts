import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - 6.25rem);

  padding-top: 2.375rem;

  h1 {
    line-height: 2.825rem;

    max-width: 17rem;
    text-align: center;
    padding-bottom: 2rem;
  }

  div a {
    font-weight: 600;
  }
`

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  max-width: 21.625rem;
  width: 100%;

  button {
    margin: 1rem 0 4rem;
    width: 100%;
  }
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`
