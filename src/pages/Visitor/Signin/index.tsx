import { NavLink } from 'react-router-dom'

import { Container } from './styles'
import { SignInForm } from 'src/components/user/SignInForm'
import { useRedirectIfAuthenticated } from 'src/hooks/useRedirectIfAuthenticated'

export function Signin() {
  useRedirectIfAuthenticated()

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
