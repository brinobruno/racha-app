import { Container } from './styles'
import { usePlayersFromTeam } from 'src/services/hooks/usePlayersFromTeam'

export function Teams() {
  const { data, isLoading, error } = usePlayersFromTeam(
    'f40011b3-db40-4922-a26c-70a8b12da9a2',
  )

  console.log(data)

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
