import { useMutation, UseMutationResult } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'typescript-cookie'

import { api } from 'src/services/api'
import { authHeader } from '../auth/authHeader'
import { USER_ID_STORAGE_KEY, USER_JWT_AUTH_TOKEN_KEY } from 'src/constants'

type LogoutData = {
  message: string
}

interface LogoutResponse {
  data: LogoutData
}

async function LogoutUser(): Promise<LogoutResponse> {
  const [userId] = await Promise.all([Cookies.get(USER_ID_STORAGE_KEY)])

  const response = await api.post(`/users/logout/${userId}`, authHeader())

  const data = response.data

  Cookies.remove(USER_ID_STORAGE_KEY)
  Cookies.remove(USER_JWT_AUTH_TOKEN_KEY)

  return { data }
}

export function useLogout(): UseMutationResult<LogoutResponse, Error> {
  const navigate = useNavigate()

  return useMutation(LogoutUser, {
    onSuccess: async () => {
      return navigate('/signin')
    },
  })
}
