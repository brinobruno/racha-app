import Cover from 'src/assets/desktop-cover.webp'

import 'react-toastify/dist/ReactToastify.css'
import { Container, ContentContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { getCookie } from 'typescript-cookie'
import { USER_JWT_AUTH_TOKEN_KEY } from 'src/constants'

export function Home() {
  const isUserAuthenticated = getCookie(USER_JWT_AUTH_TOKEN_KEY)

  return (
    <Container>
      <div>
        <img src={Cover} alt="Messi" />
      </div>

      <div>
        <h1>Gerencie times para jogar com os amigos</h1>

        <ContentContainer>
          <NavLink to="/signin">
            <button>
              {isUserAuthenticated ? 'Ir para o dashboard' : 'Entrar'}
            </button>
          </NavLink>

          {isUserAuthenticated ? null : (
            <div>
              <span>Novo por aqui? </span>
              <NavLink to="/signup">Criar conta</NavLink>
            </div>
          )}
        </ContentContainer>
      </div>
    </Container>
  )
}
