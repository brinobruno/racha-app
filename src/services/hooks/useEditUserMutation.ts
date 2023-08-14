import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { UseUserContext } from 'src/hooks/UseUserContext'
import { api } from 'src/services/api'

export interface IEditUserRequest {
  username: string
  password: string
}

export function useCreateUserMutation() {
  const { getUser, addUser } = UseUserContext()
  const user = getUser()

  const userId = user?.id

  return useMutation(
    async ({ username, password }: IEditUserRequest) => {
      const { data } = await api.put(`/users/${userId}`, {
        username,
        password,
      })

      const { user } = data

      console.log(user)

      addUser({
        id: user.id,
        email: user.email,
        username: user.username,
      })
    },
    {
      onError: (error) => {
        const errorMessage =
          error instanceof AxiosError
            ? error.response?.data.error
            : 'Erro ao editar dados'
        toast(errorMessage, {
          className: 'warning-toast',
        })
      },
    },
  )
}
