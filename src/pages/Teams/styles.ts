import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 3.5rem;
`

export const TeamsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const TeamContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(90deg, #495bcc 0%, rgba(229, 28, 68, 0.6) 100%);
  padding: 1rem;
  border-radius: 5px;

  max-width: 22rem;
  width: 100%;
`

export const TeamDataDivider = styled.div`
  display: flex;
`

export const TeamOverall = styled.strong`
  font-size: 3rem;
  font-weight: 500;
`

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
`
