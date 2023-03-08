import { SyntheticEvent, useState } from 'react'

import { api } from '../../services/api'
import { headers } from '../../Constants'
import { FieldContainer, LoginForm } from './styles'
import { useNavigate } from 'react-router-dom'

interface ISignInRequest {
  email: string | undefined
  password: string | undefined
}

async function signInUser({ email, password }: ISignInRequest) {
  try {
    const response = await api.post(`/users/login`, {
      headers,
      email,
      password,
    })
    const data = response

    console.log(data)

    return data
  } catch (error: any) {
    console.log(error.response.data)
    throw new Error(error as string)
  }
}

export function SignInForm() {
  const [email, setEmailInput] = useState('')
  const [password, setPasswordInput] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    try {
      const { data, status } = await signInUser({ email, password })

      console.log('response: ', data)

      if (data.sessionId) {
        console.log('Success:', data.message)

        localStorage.setItem('sessionId', data.sessionId)
        return navigate('/dashboard')
      } else if (status === 401) {
        console.log('Email or password is incorrect')
      } else if (status === 422) {
        console.log('User does not exist')
      }
    } catch (error: unknown) {
      console.log(error)
      throw new Error(error as string)
    }
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <FieldContainer>
        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          name="email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </FieldContainer>

      <button type="submit">Entrar</button>
    </LoginForm>
  )
}
