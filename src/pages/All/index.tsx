import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import { Container } from './styles'

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
          <ul>
            {teams.map((team: ITeamData) => (
              <li key={team.id}>
                <div>ID: {team.id}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button>Criar time</button>
    </Container>
  )
}
