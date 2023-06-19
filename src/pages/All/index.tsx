import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import {
  Container,
  PlayerContainer,
  TeamContainer,
  TeamsContainer,
} from './styles'

export function All() {
  const { data, isLoading, error } = useTeams()

  const teams = data ? data.teams : undefined

  console.log(teams)

  return (
    <Container>
      <h1>All</h1>

      <div>
        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}

        {teams && (
          <TeamsContainer>
            <strong>Teams of user: </strong>
            {teams.map((team: ITeamData) => (
              <TeamContainer key={team.id}>
                <div>ID: {team.id}</div>

                <div>
                  {team.players.map((player) => (
                    <PlayerContainer key={player.id}>
                      <span>
                        {player.name}
                        <br />
                      </span>
                    </PlayerContainer>
                  ))}
                </div>
              </TeamContainer>
            ))}
          </TeamsContainer>
        )}
      </div>

      <button>Criar time</button>
    </Container>
  )
}
