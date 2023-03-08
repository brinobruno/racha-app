import { useQuery } from 'react-query'

import { headers } from '../../Constants'
import { api } from '../api'

interface UsersDataResponse {
  id: string
  username: string
  email: string
  created_at: Date
}

async function getUsers() {
  const response = await api.get(`/users/`, {
    headers,
  })

  const data = response.data

  const users = data.users.map((user: UsersDataResponse) => {
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
}

export function useUsers() {
  return useQuery<UsersDataResponse[]>('users', getUsers, {
    staleTime: 1000 * 5, // WIll be fresh for 5 seconds (!obsolete)
  })
}
