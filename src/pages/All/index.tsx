import { useTeams } from 'src/services/hooks/useTeams'
import { Container } from './styles'

export function All() {
  const { data, isLoading, error } = useTeams()

  console.log(data)

  // const teams = data

  return (
    <Container>
      <h1>Meus times</h1>

      <div>
        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}

        {/* {teams && (
          <ul>
            {teams.map((teams: any) => (
              <li key={teams.id}>
                <div>ID: {teams.id}</div>
              </li>
            ))}
          </ul>
        )} */}
      </div>

      <button>Criar time</button>
    </Container>
  )
}
