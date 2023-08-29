import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`

export const ListItem = styled.tr`
  background: ${(props) => props.theme['secondary-accent']};

  padding: 1rem;
`
