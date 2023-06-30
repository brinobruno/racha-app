import { useQuery } from 'react-query'
import { Cookies } from 'typescript-cookie'

import { api } from 'src/services/api'
import { USER_ID_STORAGE_KEY } from 'src/constants'

interface IUserData {
  active: boolean
  created_at: string
  deleted_at: string
  email: string
  id: string
  password: string
  updated_at: string
  username: string
}

type UserDataResponse = {
  user: IUserData | undefined
}

async function getUserData(): Promise<UserDataResponse> {
  const userId = Cookies.get(USER_ID_STORAGE_KEY)

  const response = await api.get(`/users/${userId}`)

  const data = response.data

  return data
}

export function useUser() {
  return useQuery('user', getUserData, {
    staleTime: 1000 * 5, // WIll be fresh for 5 seconds (!obsolete)
  })
}
