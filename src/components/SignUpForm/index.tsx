import { SyntheticEvent, useState } from 'react'

import { api } from '../../services/api'
import { headers } from '../../Constants'
import { FieldContainer, LoginForm } from './styles'
// import { useNavigate } from 'react-router-dom'

interface ISignUpRequest {
  username: string
  email: string
  password: string
}

async function signUpUser({ username, email, password }: ISignUpRequest) {
  try {
    const response = await api.post(`/users/create`, {
      headers,
      username,
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

export function SignUpForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const navigate = useNavigate()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    try {
      const { data, status } = await signUpUser({ username, email, password })

      console.log('response: ', data)

      if (data.sessionId) {
        console.log('Success:', data.message)

        // localStorage.setItem('sessionId', data.sessionId)
        // return navigate('/dashboard')
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
        <label htmlFor="username">Apelido</label>
        <input
          required
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FieldContainer>

      <button type="submit">Entrar</button>
    </LoginForm>
  )
}
