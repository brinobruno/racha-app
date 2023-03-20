import { useQuery } from 'react-query'

import { USER_ID_STORAGE_KEY, headers } from '../../constants'
import { api } from '../api'
import { Cookies } from 'typescript-cookie'

interface UserDataResponse {
  user: UserDataResponse | undefined
  active: boolean
  created_at: string
  deleted_at: string
  email: string
  id: string
  password: string
  session_id: string
  updated_at: string
  username: string
}

async function getUserData(): Promise<UserDataResponse> {
  const userId = Cookies.get(USER_ID_STORAGE_KEY)

  const response = await api.get(`/users/${userId}`, {
    headers,
  })

  const data = response.data

  return data
}

export function useUser() {
  return useQuery('user', getUserData, {
    staleTime: 1000 * 5, // WIll be fresh for 5 seconds (!obsolete)
  })
}
