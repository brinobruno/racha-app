import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import { Container, TeamContainer, TeamsContainer } from './styles'

export function Teams() {
  const { data, isLoading, error } = useTeams()

  const teams = data ? data.teams : undefined

  console.log(teams)

  return (
    <Container>
      <h1>Teams from user</h1>

      <div>
        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}

        {teams && (
          <TeamsContainer>
            {teams.map((team: ITeamData) => (
              <TeamContainer key={team.id}>
                <div>{team.teamOverall}</div>
                <div>ID: {team.id}</div>
                <div>{`${team.playerCount} Players`}</div>

                {/* {team.players.map((player) => (
                  <PlayerContainer key={player.id}>
                    <strong>Player: </strong>

                    <span>
                      {player.name}
                      <br />
                      {player.overall}
                      <br />
                    </span>
                  </PlayerContainer>
                ))} */}
              </TeamContainer>
            ))}
          </TeamsContainer>
        )}
      </div>

      <button>Criar time</button>
    </Container>
  )
}
