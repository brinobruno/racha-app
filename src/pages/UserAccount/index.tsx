import { useUser } from 'src/services/hooks/useUser'

export function UserAccount() {
  const { data, isLoading, error } = useUser()

  const user = data && data.user

  return (
    <section>
      <h1>Minha conta</h1>

      {isLoading && <span>Carregando...</span>}
      {typeof error === 'string' && <span>Erro: {error}</span>}

      <span>{user?.email}</span>
      <br />
      <span>{user?.username}</span>
    </section>
  )
}
