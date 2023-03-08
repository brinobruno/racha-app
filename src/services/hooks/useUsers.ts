import { useQuery } from 'react-query'

import { headers } from '../../Constants'
import { api } from '../api'

interface useUsersDataResponse {
  id: string
  username: string
  email: string
  created_at: Date
}

export function useUsers() {
  return useQuery(
    ['users'],
    async () => {
      const response = await api.get(`/users/`, {
        headers,
      })

      const data = response.data

      const users = data.users.map((user: useUsersDataResponse) => {
        return {
          id: user.id,
          username: user.username,
          email: user.email,
          createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        }
      })

      return users
    },
    {
      staleTime: 1000 * 5, // WIll be fresh for 5 seconds (!obsolete)
    },
  )
}
