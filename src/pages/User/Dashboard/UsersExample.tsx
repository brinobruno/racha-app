import { useEffect } from 'react'
import { useUsers } from 'src/services/hooks/useUsers'
import { UseUserContext } from 'src/hooks/UseUserContext'

export function UsersExample() {
  const { data, isLoading, error } = useUsers()
  const { getUser } = UseUserContext()

  useEffect(() => {
    getUser()
  })

  return (
    <section>
      <h1>Dashboard</h1>

      <div>
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
      </div>
    </section>
  )
}
