import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { api } from 'src/services/api'
import { FieldContainer, Form, Validate, WarningsContainer } from './styles'
import { Cookies } from 'typescript-cookie'
import { USER_ID_STORAGE_KEY } from 'src/constants'

interface ICreateTeamRequest {
  title: string
  owner: string
}

const createTeamFormValidationSchema = zod.object({
  title: zod.string().min(2, 'Insira o nome do time (mínimo 2 caracteres)'),
  owner: zod.string().min(2, 'Insira o nome da org (mínimo 2 caracteres)'),
})

export type CreateTeamFormData = zod.infer<
  typeof createTeamFormValidationSchema
>

export function CreateTeamForm() {
  const userId = Cookies.get(USER_ID_STORAGE_KEY)

  const newCreateTeamForm = useForm<CreateTeamFormData>({
    resolver: zodResolver(createTeamFormValidationSchema),
    defaultValues: {
      title: '',
      owner: '',
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = newCreateTeamForm
  const handleCreateTeamSubmit: SubmitHandler<ICreateTeamRequest> = (
    createTeamInputs,
  ) => {
    handleCreateTeam(createTeamInputs)
  }

  const createTeam = useMutation(
    async ({ title, owner }: ICreateTeamRequest) => {
      const { data } = await api.post(`/users/teams/create/${userId}`, {
        title,
        owner,
      })

      console.log(data)
    },
  )

  const handleCreateTeam = (inputs: ICreateTeamRequest) => {
    createTeam.mutate(inputs, {
      onSuccess: async () => {
        reset()

        toast('Time criado com sucesso')
      },
      onError: () => {
        toast('Revise os detalhes', {
          className: 'warning-toast',
        })
      },
    })
  }

  let createTeamError
  if (createTeam.error instanceof AxiosError)
    createTeamError = createTeam.error.response?.data.error

  return (
    <Form onSubmit={handleSubmit(handleCreateTeamSubmit)}>
      <FieldContainer>
        <label htmlFor="title">Title</label>
        <input
          required
          id="title"
          {...register('title')}
          name="title"
          autoFocus
        />
      </FieldContainer>

      {errors?.title && <Validate>{errors.title.message}</Validate>}

      <FieldContainer>
        <label htmlFor="owner">Owner</label>
        <input required id="owner" {...register('owner')} name="owner" />
      </FieldContainer>

      {errors?.owner && <Validate>{errors.owner.message}</Validate>}

      <button
        data-testid="create-team-submit"
        disabled={createTeam.isLoading}
        type="submit"
      >
        Criar
      </button>

      <WarningsContainer>
        {createTeam.isLoading && <span>Criando time...</span>}
        {createTeam.isSuccess && <span>Time criado com sucesso</span>}
        {createTeam.isError && (
          <span>
            Erro ao criar time: <br />
            {createTeamError}
          </span>
        )}
      </WarningsContainer>
    </Form>
  )
}
