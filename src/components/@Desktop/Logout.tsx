import { useTheme } from 'styled-components'
import { SignOut } from 'phosphor-react'

import { useLogout } from 'src/services/hooks/useLogout'

export function Logout() {
  const currentTheme = useTheme()
  const { isLoading, isError, isSuccess, mutateAsync } = useLogout()

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
