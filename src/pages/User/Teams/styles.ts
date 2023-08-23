import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  padding: 3.5rem;
`

export const TeamsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 24rem;
`

export const TeamContainer = styled.li`
  background: linear-gradient(90deg, #495bcc 0%, rgba(229, 28, 68, 0.6) 100%);
  border-radius: 5px;

  -webkit-box-shadow: 3px 3px 12px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 12px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 12px -6px rgba(0, 0, 0, 0.75);

  width: 100%;

  transition: 0.1s filter ease-in-out;

  &:hover {
    filter: contrast(1.3);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
  }
`

export const TeamDataDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`

export const TeamOverall = styled.strong`
  font-size: 3rem;
  font-weight: 500;
  line-height: 100%;

  font-family: 'DinProCondMed';
  font-weight: 500;
  color: #e9edf5;
`

export const TeamData = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    font-size: 1.125rem;
    font-family: 'DinPro';
    color: #e9edf5;
  }

  strong {
    font-weight: 600;
  }
`

export const CreateTeamButton = styled.button`
  width: 24rem;
`
