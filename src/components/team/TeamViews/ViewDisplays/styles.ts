import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  span {
    cursor: pointer;

    &.active {
      svg {
        color: ${(props) => props.theme['primary-300']};
        transition: 0.2s ease-in-out;
      }
    }
  }
`
