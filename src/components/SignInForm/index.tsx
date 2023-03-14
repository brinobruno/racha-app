import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import { USER_SESSION_STORAGE_KEY, headers } from '../../constants'
import { UseUserContext } from '../../hooks/UseUserContext'
import { addCookie } from '../../services/auth/addCookie'
import { FieldContainer, Form } from './styles'

interface ISignInRequest {
  email: string
  password: string
}

const signInFormValidationSchema = zod.object({
  email: zod.string().email().min(2, 'Informe seu email'),
  password: zod.string().min(7, 'Informe uma senha válida'),
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
    const data = response.data

    console.log(data)

    return data
  })

  const signInUser = (inputs: ISignInRequest) => {
    loginUser.mutate(inputs, {
      onSuccess: async () => {
        reset()

        const sessionId = loginUser.data.sessionId

        await addCookie(USER_SESSION_STORAGE_KEY, sessionId)

        await addUser({
          id: loginUser.data.user.id,
          username: undefined,
          email: loginUser.data.user.email,
        })

        return navigate('/dashboard')
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

      {errors?.email && <span>{errors.email.message}</span>}
      {errors?.password && <span>{errors.password.message}</span>}

      <button disabled={loginUser.isLoading} type="submit">
        Entrar
      </button>

      {loginUser.isLoading && <span>Loading...</span>}
      {loginUserError && <span>{loginUserError}</span>}
    </Form>
  )
}
