import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import {
  Container,
  TeamDataContainer,
  PlayerContainer,
  TeamHeader,
  TeamContainer,
  TeamDetails,
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

  const createdAt = new Date(team?.created_at ?? new Date())

  const formattedDate = format(createdAt, "'Desde:' d 'de' MMMM 'de' yyyy")

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

            <TeamDetails>
              <span>Técnico: {team.owner}</span>
              <small>{formattedDate}</small>
            </TeamDetails>

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

        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}

        <button>Criar jogador</button>
      </TeamContainer>
    </Container>
  )
}
