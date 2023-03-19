// import { useUsers } from '../../services/hooks/useUsers'
import { UseUserContext } from '../../hooks/UseUserContext'

export function UserAccount() {
  // const { data, isLoading, error } = useUsers()
  const { getUser } = UseUserContext()

  const user = getUser()

  console.log(user)

  return (
    <section>
      <h1>Minha conta</h1>

      <ul>
        <li>{user?.id}</li>
        <li>{user?.username}</li>
        <li>{user?.email}</li>
      </ul>
    </section>
  )
}
