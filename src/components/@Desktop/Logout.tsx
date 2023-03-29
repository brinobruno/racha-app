import { SignOut } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { useMutation, UseMutationResult } from 'react-query'
import { Cookies } from 'typescript-cookie'

import { api } from 'src/services/api'
import {
  USER_ID_STORAGE_KEY,
  USER_SESSION_STORAGE_KEY,
  headers,
} from 'src/constants'

interface LogoutResponse {
  data: any
}

async function LogoutUser(): Promise<LogoutResponse> {
  const [userId, sessionIdValue] = await Promise.all([
    Cookies.get(USER_ID_STORAGE_KEY),
    Cookies.get(USER_SESSION_STORAGE_KEY),
  ])

  const response = await api.post(`/users/logout/${userId}`, {
    headers: {
      ...headers,
      Cookies: `${sessionIdValue}`,
    },
  })

  const data = response.data

  Cookies.remove(USER_ID_STORAGE_KEY)
  Cookies.remove(USER_SESSION_STORAGE_KEY)

  return { data }
}

export function useLogoutUser(): UseMutationResult<LogoutResponse, Error> {
  return useMutation(LogoutUser)
}

export function Logout() {
  const currentTheme = useTheme()
  const { isLoading, isError, isSuccess, mutateAsync } = useLogoutUser()

  const handleLogout = async () => {
    await mutateAsync(undefined) // call mutateAsync with no arguments
  }

  return (
    <div>
      <button onClick={handleLogout} disabled={isLoading}>
        <SignOut weight="bold" color={currentTheme['primary-500']} size={24} />
        <span>Sair</span>
      </button>

      {isLoading && <div>Logging out...</div>}
      {isSuccess && <div>Logged out successfully.</div>}
      {isError && <div>Error logging out.</div>}
    </div>
  )
}
