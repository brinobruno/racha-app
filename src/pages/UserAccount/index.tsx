import { useUser } from '../../services/hooks/useUser'

export function UserAccount() {
  const { data, isLoading, error } = useUser()

  const user = data && data.user

  console.log(user)

  return (
    <section>
      <h1>Minha conta</h1>

      {isLoading ? <span>Loading</span> : ''}
      {error ? <span>Error</span> : ''}
    </section>
  )
}
