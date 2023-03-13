import { NavLink } from 'react-router-dom'

import { Container } from './styles'
import { SignInForm } from '../../components/SignInForm'
// import { useSession } from '../../hooks/useSession'

export function Signin() {
  // useSession()

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
