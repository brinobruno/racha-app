import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;

  button {
    margin-top: 1rem;
    width: 100%;
  }
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;

  label {
    font-weight: 600;
  }

  input {
    background: ${(props) => props.theme['neutral-700']};
    outline: ${(props) => props.theme['neutral-700']};
    color: ${(props) => props.theme['neutral-100']};
    transition: 0.15s outline ease-in-out, 0.15s color ease-in-out;

    &:focus {
      outline: 1px solid ${(props) => props.theme['secondary-500']};
      color: ${(props) => props.theme['secondary-300']};
    }

    &[id='email'] {
      cursor: not-allowed;
      background-color: ${(props) => props.theme['neutral-900']};
      opacity: 0.7;
    }
  }
`

export const WarningsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    text-align: center;
  }
`

export const Validate = styled.span`
  font-size: 0.875rem;
`
