import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from '../../services/api'
import { USER_SESSION_STORAGE_KEY, headers } from '../../constants'
import { FieldContainer, Form } from './styles'

import { useNavigate } from 'react-router-dom'
import { setCookie } from 'typescript-cookie'

interface ISignInRequest {
  email: string
  password: string
}

const signInFormValidationSchema = zod.object({
  username: zod.string().min(2, 'Informe seu apelido'),
  email: zod.string().email().min(2, 'Informe seu email'),
  password: zod.string().min(7, 'Informe uma senha válida'),
})

export type SignInFormData = zod.infer<typeof signInFormValidationSchema>

export function SignInForm() {
  const navigate = useNavigate()

  const newSignInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInFormValidationSchema),
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
  } = newSignInForm
  const handleSignInUserSubmit: SubmitHandler<ISignInRequest> = (
    signInInputs,
  ) => {
    signInUser(signInInputs)
  }

  const LoginUser = useMutation(async ({ email, password }: ISignInRequest) => {
    const response = await api.post(`/users/login`, {
      headers,
      email,
      password,
    })
    const data = response.data

    console.log(data)

    setCookie(USER_SESSION_STORAGE_KEY, data.sessionId, {
      expires: 60,
      path: '/',
      sameSite: 'Strict',
      // secure: true,
      // domain: 'subdomain.site.com
    })

    return navigate('/dashboard')
  })

  const signInUser = (inputs: ISignInRequest) => {
    LoginUser.mutate(inputs, { onSuccess: () => reset() })
  }

  let loginUserError
  if (LoginUser.error instanceof AxiosError)
    loginUserError = LoginUser.error.response?.data.error

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

      <button type="submit">Entrar</button>

      {LoginUser.isLoading && <span>Loading...</span>}
      {loginUserError && <span>{loginUserError}</span>}
    </Form>
  )
}
