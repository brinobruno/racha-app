import { Link, useParams } from 'react-router-dom'

import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import { PlayerContainer } from './styles'

const findTeamById = (teams: ITeamData[], id: string | undefined) => {
  return teams.find((team) => team.id === id)
}

export function Team() {
  const { id } = useParams() // Access the ID from the URL
  const { data, isLoading, error } = useTeams()

  const teams = data?.teams ?? []

  const team = findTeamById(teams, id)

  console.log(team)

  return (
    <section>
      <Link to="/teams/">Voltar</Link>

      <div>
        {team ? (
          <div>
            <h1>{team.title}</h1>
            <span>By manager: {team.owner}</span>

            <small>Created at: {team.created_at}</small>

            <strong>{team.teamOverall}</strong>

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
          </div>
        ) : (
          <span>Something wrong</span>
        )}

        <div>
          {isLoading && <span>Carregando...</span>}
          {typeof error === 'string' && <span>Erro: {error}</span>}
        </div>

        <button>Criar jogador</button>
      </div>
    </section>
  )
}
