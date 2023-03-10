import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Container } from './styles'
import { SignUpForm } from '../../components/SignUpForm'
import { USER_SESSION_STORAGE_KEY } from '../../Constants'

export function SignUp() {
  const navigate = useNavigate()

  const sessionId = localStorage.getItem(USER_SESSION_STORAGE_KEY)

  useEffect(() => {
    if (sessionId) {
      navigate('/dashboard')
    }
  })

  return (
    <Container>
      <h1>Olá! Registre-se para começar 👋</h1>

      <SignUpForm />

      <div>
        <span>Já possui uma conta? </span>
        <NavLink to="/signin">Entrar</NavLink>
      </div>
    </Container>
  )
}
