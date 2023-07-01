/* eslint-disable camelcase */
import { useQuery } from 'react-query'

import { api } from 'src/services/api'

interface UsersDataResponse {
  id: string
  username: string
  email: string
  created_at: string
}

async function getUsers(): Promise<UsersDataResponse[]> {
  const { data } = await api.get(`/users/`)

  const users = data.users.map(
    ({ id, username, email, created_at }: UsersDataResponse) => {
      return {
        id,
        username,
        email,
        created_at: new Date(created_at).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      }
    },
  )

  return users
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // WIll be fresh for 5 seconds (!obsolete)
  })
}
