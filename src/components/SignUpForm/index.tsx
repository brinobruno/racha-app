import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'

import { api } from '../../services/api'
import { headers } from '../../Constants'
import { FieldContainer, Form } from './styles'
import { AxiosError } from 'axios'
// import { useNavigate } from 'react-router-dom'

interface ISignUpRequest {
  username: string
  email: string
  password: string
}

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignUpRequest>()
  const handleSignUpUserSubmit: SubmitHandler<ISignUpRequest> = (
    signUpInputs,
  ) => {
    signUpUser(signUpInputs)
  }

  // const navigate = useNavigate()

  const createUser = useMutation(
    async ({ username, email, password }: ISignUpRequest) => {
      const response = await api.post(`/users/create`, {
        headers,
        username,
        email,
        password,
      })
      const data = response

      console.log(data)

      return response
    },
  )

  const signUpUser = (inputs: ISignUpRequest) => {
    createUser.mutate(inputs, { onSuccess: () => reset() })
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

      {errors?.username && <span>{errors.username.message}</span>}
      {errors?.email && <span>{errors.email.message}</span>}
      {errors?.password && <span>{errors.password.message}</span>}

      <button disabled={createUser.isLoading} type="submit">
        Entrar
      </button>

      {createUser.isLoading && <span>Loading...</span>}
      {createUserError && <span>{createUserError}</span>}
    </Form>
  )
}
