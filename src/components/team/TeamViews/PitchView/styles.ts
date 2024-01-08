import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['secondary-accent']};
  padding: 2rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
