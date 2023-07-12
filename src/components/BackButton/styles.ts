import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;

  a {
    display: flex;
    align-items: center;

    text-align: left;

    svg,
    span {
      transition: 0.25s ease-in-out;
    }

    &:hover {
      svg,
      span {
        color: ${(props) => props.theme['primary-500']};
      }
    }
  }
`
