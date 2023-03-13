import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { UseUserContext } from '../../hooks/UseUserContext'
import { api } from '../../services/api'
import { USER_SESSION_STORAGE_KEY, headers } from '../../constants'
import { FieldContainer, Form } from './styles'

import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
// import { useSession } from '../../hooks/useSession'

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
  // useSession()

  const navigate = useNavigate()
  const { addUser, getUser } = UseUserContext()

  const newSignInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function addCookie(sessionId: string) {
    return Cookies.set(USER_SESSION_STORAGE_KEY, sessionId, {
      expires: 60,
      path: '',
    })
  }

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

    // const id = await data.data.user.id

    await addCookie(data.sessionId)

    // FIX LATER on api
    addUser({ id: 'temp', username: 'temp', email })
    getUser()

    return navigate('/dashboard')
  })

  const signInUser = (inputs: ISignInRequest) => {
    loginUser.mutate(inputs, { onSuccess: () => reset() })
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
