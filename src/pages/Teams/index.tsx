import { useTeams } from 'src/services/hooks/useTeams'
import { Container } from './styles'

export function Teams() {
  const { data, isLoading, error } = useTeams()

  console.log(data)

  return (
    <Container>
      <h1>Meus times</h1>

      {/* <div>
        {isLoading && <span>Loading...</span>}
        {typeof error === 'string' && <span>{error}</span>}

        {data && (
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                <div>ID: {user.id}</div>
                <div>Username: {user.username}</div>
                <div>Email: {user.email}</div>
                <div>Created at: {user.created_at}</div>
              </li>
            ))}
          </ul>
        )}
      </div> */}

      <button>Criar time</button>
    </Container>
  )
}
