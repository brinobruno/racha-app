import { NavLink } from 'react-router-dom'

import { Container } from './styles'
import { SignUpForm } from 'src/components/user/SignUpForm'
import { useRedirectIfAuthenticated } from 'src/hooks/useRedirectIfAuthenticated'

export function SignUp() {
  useRedirectIfAuthenticated()

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
