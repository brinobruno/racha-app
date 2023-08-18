import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { UseUserContext } from 'src/hooks/UseUserContext'
import { api } from 'src/services/api'
import { addCookie } from 'src/services/auth/addCookie'
import { USER_JWT_AUTH_TOKEN_KEY } from 'src/constants'

export interface ISignInRequest {
  email: string
  password: string
}

export function useSignInMutation() {
  const { addUser } = UseUserContext()

  return useMutation(
    async ({ email, password }: ISignInRequest) => {
      const { data } = await api.post(`/users/login`, {
        email,
        password,
      })
      const { user, token } = data

      await addCookie(USER_JWT_AUTH_TOKEN_KEY, token)

      await addUser({
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
            : 'Revise os dados de login!'
        toast(errorMessage, {
          className: 'warning-toast',
        })
      },
    },
  )
}
