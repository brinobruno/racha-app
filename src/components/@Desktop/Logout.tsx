import { useTheme } from 'styled-components'
import { IconWeight, SignOut } from 'phosphor-react'

import { useLogout } from 'src/services/hooks/useLogout'

interface ILogoutButtonProps {
  btnWeight: IconWeight
  btnSize: number
}

export function Logout({ btnWeight, btnSize }: ILogoutButtonProps) {
  const currentTheme = useTheme()
  const { isLoading, isError, isSuccess, mutateAsync } = useLogout()

  const handleLogout = async () => {
    await mutateAsync(undefined) // call mutateAsync with no arguments
  }

  return (
    <>
      <button onClick={handleLogout} disabled={isLoading}>
        <SignOut
          weight={btnWeight}
          size={btnSize}
          color={currentTheme['primary-500']}
        />
        <span>Sair</span>
      </button>

      {isLoading && <div>Logging out...</div>}
      {isSuccess && <div>Logged out successfully.</div>}
      {isError && <div>Error logging out.</div>}
    </>
  )
}
