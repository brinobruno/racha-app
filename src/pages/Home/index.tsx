import Cover from './../../assets/desktop-cover.webp'

import 'react-toastify/dist/ReactToastify.css'
import { Container, ContentContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <div>
        <img src={Cover} alt="" />
      </div>

      <div>
        <h1>Gerencie times para jogar com os amigos</h1>

        <ContentContainer>
          <button>
            <NavLink to="/signin" title="Entrar">
              Entrar
            </NavLink>
          </button>

          <div>
            <span>Novo por aqui? </span>
            <NavLink to="/signup" title="Entrar">
              Criar conta
            </NavLink>
          </div>
        </ContentContainer>
      </div>
    </Container>
  )
}
