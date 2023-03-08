import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'

import { api } from '../../services/api'
import { headers } from '../../Constants'
import { FieldContainer, LoginForm } from './styles'
// import { useNavigate } from 'react-router-dom'

interface ISignInRequest {
  email: string | undefined
  password: string | undefined
}

export function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
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
    const data = response

    console.log(data)

    return response
  })

  const signInUser = (inputs: ISignInRequest) => {
    LoginUser.mutate(inputs, { onSuccess: () => reset() })
  }

  // const navigate = useNavigate()

  //   try {
  //     const { data, status } = await signInUser({ email, password })

  //     console.log('response: ', data)

  //     if (data.sessionId) {
  //       console.log('Success:', data.message)

  //       localStorage.setItem('sessionId', data.sessionId)
  //       return navigate('/dashboard')
  //     } else if (status === 401) {
  //       console.log('Email or password is incorrect')
  //     } else if (status === 422) {
  //       console.log('User does not exist')
  //     }
  //   } catch (error: unknown) {
  //     console.log(error)
  //     throw new Error(error as string)
  //   }
  // }

  return (
    <LoginForm onSubmit={handleSubmit(handleSignInUserSubmit)}>
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

      <button type="submit">Entrar</button>
    </LoginForm>
  )
}
