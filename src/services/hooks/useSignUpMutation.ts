import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { api } from 'src/services/api'
import { USER_JWT_AUTH_TOKEN_KEY } from 'src/constants'
import { addCookie } from 'src/services/auth/addCookie'
import { UseUserContext } from 'src/hooks/UseUserContext'

interface ISignUpRequest {
  username: string
  email: string
  password: string
}

export function useSignUpMutation() {
  const { addUser } = UseUserContext()

  return useMutation(
    async ({ username, email, password }: ISignUpRequest) => {
      const { data } = await api.post(`/users/signup`, {
        username,
        email,
        password,
      })
      const { user, token } = data

      await addCookie(USER_JWT_AUTH_TOKEN_KEY, token)

      addUser({
        id: user.id,
        username: user.username,
        email: user.email,
      })
    },
    {
      onError: (error) => {
        const errorMessage =
          error instanceof AxiosError
            ? error.response?.data.error
            : 'Erro ao criar conta'
        toast(errorMessage, {
          className: 'warning-toast',
        })
      },
    },
  )
}
