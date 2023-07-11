import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  padding: 3.5rem 0;

  > a {
    text-align: left;
    width: 100%;
  }
`

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const TeamDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TeamHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
`

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`
