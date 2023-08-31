import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  height: 100%;
`

export const PlayerTable = styled.table`
  width: 65%;
  border-spacing: unset;
`

export const ListHeaders = styled.tr`
  background: ${(props) => props.theme['secondary-600']};

  th {
    font-size: 1.125rem;
    font-weight: 500;
    text-align: left;

    padding: 0.75rem;
  }
`

export const ListData = styled.tr`
  background: ${(props) => props.theme['secondary-accent']};
  transition: 0.1s ease-in-out;

  &:nth-child(even) {
    background: ${(props) => props.theme['secondary-accent-hover']};
  }

  &:hover {
    background: ${(props) => props.theme['secondary-550']};
  }

  td {
    padding: 0.25rem 0.75rem;
    max-height: 3.125rem;
  }
`

export const HeadingBigger = styled.th`
  width: 64%;
`

export const HeadingSmaller = styled.th`
  width: 12%;
`

export const DataBigger = styled.td`
  display: flex;
  align-items: center;
`

export const DataSmaller = styled.td`
  text-align: center;
`

export const PlayerNationality = styled.img`
  width: 32px;
`

export const PlayerPicture = styled.img`
  width: 42px;
  height: auto;
`

export const PlayerSummary = styled.div`
  width: 35%;
  height: auto;

  background: ${(props) => props.theme['secondary-600']};
`
