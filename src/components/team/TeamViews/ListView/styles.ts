import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  height: 100%;
`

export const TableScrollWrapper = styled.div`
  width: 65%;
  max-height: 27.75rem;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['secondary-600']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['secondary-300']};
    -webkit-border-radius: 10px;
  }
`

export const PlayerTable = styled.table`
  width: 100%;
  border-spacing: unset;

  thead {
    position: relative;
    z-index: 2;
  }
`
