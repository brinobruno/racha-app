import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { api } from 'src/services/api'
import { USER_SESSION_STORAGE_KEY, headers } from 'src/constants'
import { UseUserContext } from 'src/hooks/UseUserContext'
import { addCookie } from 'src/services/auth/addCookie'
import { FieldContainer, Form, Validate, WarningsContainer } from './styles'

interface ISignInRequest {
  email: string
  password: string
}

const signInFormValidationSchema = zod.object({
  email: zod.string().email('Insira um email válido'),
  password: zod.string().min(7, 'Insira uma senha válida'),
})

export type SignInFormData = zod.infer<typeof signInFormValidationSchema>

export function SignInForm() {
  const navigate = useNavigate()
  const { addUser } = UseUserContext()

  const newSignInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = newSignInForm
  const handleSignInUserSubmit: SubmitHandler<ISignInRequest> = (
    signInInputs,
  ) => {
    signInUser(signInInputs)
  }

  const loginUser = useMutation(async ({ email, password }: ISignInRequest) => {
    const response = await api.post(`/users/login`, {
      headers,
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
  })

  const signInUser = (inputs: ISignInRequest) => {
    loginUser.mutate(inputs, {
      onSuccess: async () => {
        reset()

        toast('Bem-vindo(a) de volta!')

        return navigate('/dashboard')
      },
      onError: () => {
        toast('Revise os dados de login!')
      },
    })
  }

  let loginUserError
  if (loginUser.error instanceof AxiosError)
    loginUserError = loginUser.error.response?.data.error

  return (
    <Form onSubmit={handleSubmit(handleSignInUserSubmit)}>
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
        data-testid="signin-submit"
        disabled={loginUser.isLoading}
        type="submit"
      >
        Entrar
      </button>

      <WarningsContainer>
        {loginUser.isLoading && <span>Entrando...</span>}
        {loginUser.isSuccess && <span>Entrada com sucesso.</span>}
        {loginUser.isError && (
          <span>
            Erro ao entrar: <br />
            {loginUserError}
          </span>
        )}
      </WarningsContainer>
    </Form>
  )
}
