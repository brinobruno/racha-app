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
  align-items: center;
  gap: 1rem;

  width: 100%;

  h1,
  strong {
    font-family: 'DinPro', sans-serif;
    font-size: 4rem;
    line-height: 100%;
  }

  h1 {
    padding-bottom: 2rem;
  }
`

export const TeamDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  width: 100%;

  span,
  small {
    display: inline-block;
    text-align: center;
  }

  small {
    padding-bottom: 2rem;
  }
`

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`
