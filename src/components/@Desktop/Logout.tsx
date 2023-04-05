import { useTheme } from 'styled-components'
import { IconWeight, SignOut } from 'phosphor-react'

import { useLogout } from 'src/services/hooks/useLogout'
import { toast } from 'react-toastify'

interface ILogoutButtonProps {
  btnWeight: IconWeight
  btnSize: number
}

export function Logout({ btnWeight, btnSize }: ILogoutButtonProps) {
  const currentTheme = useTheme()
  const { isLoading, isError, mutateAsync } = useLogout()

  const handleLogout = async () => {
    await mutateAsync(undefined) // call mutateAsync with no arguments

    toast('Você saiu da sua conta')
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

      {isError && toast('Erro ao sair da sua conta')}
    </>
  )
}
