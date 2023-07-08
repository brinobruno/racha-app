import { CaretRight } from 'phosphor-react'

import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import {
  Container,
  CreateTeamButton,
  TeamContainer,
  TeamData,
  TeamDataDivider,
  TeamOverall,
  TeamsContainer,
} from './styles'
import { Link } from 'react-router-dom'

export function Teams() {
  const { data, isLoading, error } = useTeams()

  const teams = data ? data.teams : undefined

  console.log(teams)

  return (
    <Container>
      <h1>Meus Times</h1>

      <div>
        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}

        {teams && (
          <TeamsContainer>
            {teams.map((team: ITeamData) => (
              <TeamContainer key={team.id}>
                <Link to={`/teams/team/${team.id}`}>
                  <TeamDataDivider>
                    <TeamOverall>{team.teamOverall}</TeamOverall>

                    <TeamData>
                      <strong>{team.title}</strong>
                      <span>{`${team.playerCount} Players`}</span>
                    </TeamData>
                  </TeamDataDivider>

                  <CaretRight size={28} weight="bold" color="#E9EDF5" />
                </Link>
              </TeamContainer>
            ))}
          </TeamsContainer>
        )}
      </div>

      <CreateTeamButton>Criar time</CreateTeamButton>
    </Container>
  )
}
