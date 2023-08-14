import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { Cookies } from 'typescript-cookie'

import { api } from 'src/services/api'
import { FieldContainer, Form, Validate, WarningsContainer } from './styles'
import { USER_ID_STORAGE_KEY } from 'src/constants'

interface IEditUserRequest {
  username: string
}

const editUserFormValidationSchema = zod.object({
  username: zod
    .string()
    .min(2, 'Insira seu novo username (mínimo 2 caracteres)'),
})

export type EditUserFormData = zod.infer<typeof editUserFormValidationSchema>

export function EditUserForm() {
  const userId = Cookies.get(USER_ID_STORAGE_KEY)

  const newEditUserForm = useForm<EditUserFormData>({
    resolver: zodResolver(editUserFormValidationSchema),
    defaultValues: {
      username: '',
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = newEditUserForm
  const handleEditUserSubmit: SubmitHandler<IEditUserRequest> = (
    editUserInputs,
  ) => {
    handleEditUser(editUserInputs)
  }

  const editUser = useMutation(async ({ username }: IEditUserRequest) => {
    const { data } = await api.put(`/users/${userId}`, {
      username,
    })

    console.log(data)
  })

  const handleEditUser = (inputs: IEditUserRequest) => {
    editUser.mutate(inputs, {
      onSuccess: async () => {
        reset()

        toast('Usuário atualizado com sucesso')
      },
      onError: () => {
        toast('Revise os detalhes', {
          className: 'warning-toast',
        })
      },
    })
  }

  let editUserError
  if (editUser.error instanceof AxiosError)
    editUserError = editUser.error.response?.data.error

  return (
    <Form onSubmit={handleSubmit(handleEditUserSubmit)}>
      <FieldContainer>
        <label htmlFor="username">Username</label>
        <input
          required
          id="username"
          {...register('username')}
          name="username"
          autoFocus
        />
      </FieldContainer>

      {errors?.username && <Validate>{errors.username.message}</Validate>}

      <button
        data-testid="edit-user-submit"
        disabled={editUser.isLoading}
        type="submit"
      >
        Atualizar
      </button>

      <WarningsContainer>
        {editUser.isLoading && <span>Editando dados...</span>}
        {editUser.isSuccess && <span>Dados atualizados com sucesso</span>}
        {editUser.isError && (
          <span>
            Erro ao atualizar seus dados: <br />
            {editUserError}
          </span>
        )}
      </WarningsContainer>
    </Form>
  )
}
