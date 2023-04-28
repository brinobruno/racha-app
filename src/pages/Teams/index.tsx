// import { useTeams } from 'src/services/hooks/useTeams'
import { Container } from './styles'
import { usePlayersFromTeam } from 'src/services/hooks/usePlayersFromTeam'

export function Teams() {
  const { data, isLoading, error } = usePlayersFromTeam()

  const players = data?.players

  return (
    <Container>
      <h1>Meus times</h1>

      <div>
        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}

        {players && (
          <ul>
            {players.map((player) => (
              <li key={player.id}>
                <div>ID: {player.id}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button>Criar time</button>
    </Container>
  )
}
