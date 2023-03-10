import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Container } from './styles'
import { SignInForm } from '../../components/SignInForm'
import { USER_SESSION_STORAGE_KEY } from '../../Constants'

export function Signin() {
  const navigate = useNavigate()

  const sessionId = localStorage.getItem(USER_SESSION_STORAGE_KEY)

  useEffect(() => {
    if (sessionId) {
      navigate('/dashboard')
    }
  })

  return (
    <Container>
      <h1>Que bom te ver por aqui 👋</h1>

      <SignInForm />

      <div>
        <span>Novo por aqui? </span>
        <NavLink to="/signup">Criar conta</NavLink>
      </div>
    </Container>
  )
}
