import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

import { api } from 'src/services/api'
import { USER_SESSION_STORAGE_KEY, headers } from 'src/constants'
import { UseUserContext } from 'src/hooks/UseUserContext'
import { addCookie } from 'src/services/auth/addCookie'
import { FieldContainer, Form, Validate, WarningsContainer } from './styles'
import { toast } from 'react-toastify'

interface ISignUpRequest {
  username: string
  email: string
  password: string
}

const signUpFormValidationSchema = zod.object({
  username: zod.string().min(2, 'Insira um apelido (mínimo 2 caracteres)'),
  email: zod.string().email('Insira um email válido'),
  password: zod.string().min(7, 'Insira uma senha válida'),
})

export type SignUpFormData = zod.infer<typeof signUpFormValidationSchema>

export function SignUpForm() {
  const navigate = useNavigate()
  const { addUser } = UseUserContext()

  const newSignUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormValidationSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = newSignUpForm
  const handleSignUpUserSubmit: SubmitHandler<ISignUpRequest> = (
    signUpInputs,
  ) => {
    signUpUser(signUpInputs)
  }

  const createUser = useMutation(
    async ({ username, email, password }: ISignUpRequest) => {
      const response = await api.post(`/users/create`, {
        headers,
        username,
        email,
        password,
      })
      const { user, sessionId } = response.data

      await addCookie(USER_SESSION_STORAGE_KEY, sessionId)

      addUser({
        id: user.id,
        username: user.username,
        email: user.email,
      })
    },
  )

  const signUpUser = (inputs: ISignUpRequest) => {
    createUser.mutate(inputs, {
      onSuccess: async () => {
        reset()

        toast('Bem-vindo(a) ao Racha!')

        return navigate('/dashboard')
      },
      onError: () => {
        toast('Revise os dados de cadastro!')
      },
    })
  }

  let createUserError
  if (createUser.error instanceof AxiosError)
    createUserError = createUser.error.response?.data.error

  return (
    <Form onSubmit={handleSubmit(handleSignUpUserSubmit)}>
      <FieldContainer>
        <label htmlFor="username">Apelido</label>
        <input
          required
          id="username"
          {...register('username')}
          name="username"
        />
      </FieldContainer>

      {errors?.username && <Validate>{errors.username.message}</Validate>}

      <FieldContainer>
        <label htmlFor="email">Email</label>
        <input required id="email" {...register('email')} name="email" />
      </FieldContainer>

      {errors?.email && <Validate>{errors.email.message}</Validate>}

      <FieldContainer>
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          {...register('password')}
          name="password"
          type="password"
        />
      </FieldContainer>

      {errors?.password && <Validate>{errors.password.message}</Validate>}

      <button
        data-testid="signup-submit"
        disabled={createUser.isLoading}
        type="submit"
      >
        Entrar
      </button>

      <WarningsContainer>
        {createUser.isLoading && <span>Criando conta...</span>}
        {createUser.isSuccess && <span>Conta criada com sucesso</span>}
        {createUser.isError && (
          <span>
            Erro ao criar conta: <br />
            {createUserError}
          </span>
        )}
      </WarningsContainer>
    </Form>
  )
}
