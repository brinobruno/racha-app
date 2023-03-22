import { NavLink } from 'react-router-dom'

import { Container } from './styles'
import { SignUpForm } from 'src/components/SignUpForm'
import { useSession } from 'src/hooks/useSession'

export function SignUp() {
  useSession()

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
