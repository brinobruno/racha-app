import { useTeams } from 'src/services/hooks/useTeams'
import { Container } from './styles'

export function Teams() {
  const { data, isLoading, error } = useTeams()

  const teams = data?.teams

  return (
    <Container>
      <h1>Meus times</h1>

      <div>
        {isLoading && <span>Loading...</span>}
        {typeof error === 'string' && <span>{error}</span>}

        {teams && (
          <ul>
            {teams.map((team) => (
              <li key={team.id}>
                <div>ID: {team.id}</div>
                <div>Title: {team.title}</div>
                <div>Owner: {team.owner}</div>
                <div>Created at: {team.created_at}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button>Criar time</button>
    </Container>
  )
}
