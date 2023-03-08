import styled from 'styled-components'

export const Form = styled.form`
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
