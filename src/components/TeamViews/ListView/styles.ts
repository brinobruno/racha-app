import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme['secondary-accent']};

  padding: 1rem;
  border-radius: 4px;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
