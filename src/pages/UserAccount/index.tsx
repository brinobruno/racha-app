import { useUser } from 'src/services/hooks/useUser'
import { Container } from './styles'

export function UserAccount() {
  const { data, isLoading, error } = useUser()

  const user = data && data.user

  return (
    <Container>
      <h1>Minha conta</h1>

      {isLoading && <span>Carregando...</span>}
      {typeof error === 'string' && <span>Erro: {error}</span>}

      <div>
        <span>{user?.email}</span>
        <br />
        <span>{user?.username}</span>
      </div>
    </Container>
  )
}
