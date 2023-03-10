import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'

import { api } from '../../services/api'
import { headers } from '../../constants'
import { FieldContainer, Form } from './styles'
import { UseUserContext } from '../../hooks/UseUserContext'

// import { useNavigate } from 'react-router-dom'

interface ISignUpRequest {
  username: string
  email: string
  password: string
}

export function SignUpForm() {
  // const navigate = useNavigate()
  const { addUser, getUser } = UseUserContext()

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

  const createUser = useMutation(
    async ({ username, email, password }: ISignUpRequest) => {
      const response = await api.post(`/users/create`, {
        headers,
        username,
        email,
        password,
      })
      const data = response.data

      console.log(data)

      return data
    },
  )

  const signUpUser = (inputs: ISignUpRequest) => {
    createUser.mutate(inputs, {
      onSuccess: async () => {
        const id = await createUser.data.user.id
        const username = inputs.username
        const email = inputs.email

        addUser({ id, username, email })
        getUser()

        reset()
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
