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

interface ISignUpRequest {
  username: string
  email: string
  password: string
}

const signUpFormValidationSchema = zod.object({
  username: zod.string().min(2, 'Informe seu apelido'),
  email: zod.string().email().min(2, 'Informe seu email'),
  password: zod.string().min(7, 'Informe uma senha válida'),
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
      const data = response.data

      console.log(data)

      await addCookie(USER_SESSION_STORAGE_KEY, data.sessionId)

      return data
    },
  )

  const signUpUser = (inputs: ISignUpRequest) => {
    createUser.mutate(inputs, {
      onSuccess: async () => {
        reset()

        await addUser({
          id: createUser.data.user.id,
          username: createUser.data.user.username,
          email: createUser.data.user.email,
        })

        return navigate('/dashboard')
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
