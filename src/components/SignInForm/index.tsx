import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'

import { api } from '../../services/api'
import { headers } from '../../Constants'
import { FieldContainer, Form } from './styles'
import { AxiosError } from 'axios'
// import { useNavigate } from 'react-router-dom'

interface ISignInRequest {
  email: string | undefined
  password: string | undefined
}

export function SignInForm() {
  // const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignInRequest>()
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

    localStorage.setItem('sessionId', data.sessionId)
    // return navigate('/dashboard')
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
