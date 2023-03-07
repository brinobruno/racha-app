import { SyntheticEvent, useState } from 'react'
import { signInUser } from '../../services/signInUser'
import { Container, FieldContainer, SignInForm } from './styles'
import { NavLink } from 'react-router-dom'

export function Signin() {
  const [email, setEmailInput] = useState('')
  const [password, setPasswordInput] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    try {
      const response = await signInUser({
        email,
        password,
      })

      console.log(response)

      if (response.sessionId) {
        console.log('Success:', response.message)

        localStorage.setItem('sessionId', response.sessionId)
        window.location.href = '/dashboard'
      } else if (response.status === 401) {
        console.log('Email or password is incorrect')
      } else if (response.status === 422) {
        console.log('User does not exist')
      }
    } catch (error: unknown) {
      console.log(error)
      throw new Error(error as string)
    }
  }

  return (
    <Container>
      <h1>Que bom te ver por aqui 👋</h1>

      <SignInForm onSubmit={handleSubmit}>
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
      </SignInForm>

      <div>
        <span>Novo por aqui? </span>
        <NavLink to="/signup">Criar conta</NavLink>
      </div>
    </Container>
  )
}
