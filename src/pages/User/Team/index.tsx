import { useParams } from 'react-router-dom'

import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import {
  Container,
  TeamDataContainer,
  PlayerContainer,
  TeamHeader,
  TeamContainer,
} from './styles'
import { BackButton } from 'src/components/BackButton'

const findTeamById = (teams: ITeamData[], id: string | undefined) => {
  return teams.find((team) => team.id === id)
}

export function Team() {
  const { id } = useParams()
  const { data, isLoading, error } = useTeams()

  const teams = data?.teams ?? []

  const team = findTeamById(teams, id)

  console.log(team)

  return (
    <Container>
      <BackButton link="/teams" />

      <TeamContainer>
        {team ? (
          <TeamDataContainer>
            <TeamHeader>
              <h1>{team.title}</h1>
              <strong>{team.teamOverall}</strong>
            </TeamHeader>

            <span>By manager: {team.owner}</span>

            <small>Created at: {team.created_at}</small>

            {team.players.map((player) => (
              <PlayerContainer key={player.id}>
                <strong>Player: </strong>

                <span>
                  {player.name}
                  <br />
                  {player.overall}
                  <br />
                </span>
              </PlayerContainer>
            ))}
          </TeamDataContainer>
        ) : null}

        <div>
          {isLoading && <span>Carregando...</span>}
          {typeof error === 'string' && <span>Erro: {error}</span>}
        </div>

        <button>Criar jogador</button>
      </TeamContainer>
    </Container>
  )
}
