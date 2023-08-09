import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { api } from 'src/services/api'
import { USER_ID_STORAGE_KEY, USER_JWT_AUTH_TOKEN_KEY } from 'src/constants'
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

      console.log(user)

      await addCookie(USER_JWT_AUTH_TOKEN_KEY, token)
      await addCookie(USER_ID_STORAGE_KEY, user[0].id)

      addUser({
        id: user[0].id,
        username: user[0].username,
        email: user[0].email,
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
