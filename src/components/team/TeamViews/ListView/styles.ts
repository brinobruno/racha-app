import styled from 'styled-components'

export const Container = styled.table`
  width: 100%;
`

export const ListHeaders = styled.tr`
  background: ${(props) => props.theme['secondary-600']};

  th {
    text-align: left;
    padding: 0.5rem;
  }
`

export const ListData = styled.tr`
  background: ${(props) => props.theme['secondary-accent']};

  td {
    padding: 0.5rem;
  }
`
