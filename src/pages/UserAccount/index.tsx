import { useEffect } from 'react'
// import { useUsers } from '../../services/hooks/useUsers'
import { UseUserContext } from '../../hooks/UseUserContext'

export function UserAccount() {
  // const { data, isLoading, error } = useUsers()
  const { getUser } = UseUserContext()

  useEffect(() => {
    getUser()
  })

  return (
    <section>
      <h1>Minha conta</h1>
    </section>
  )
}
