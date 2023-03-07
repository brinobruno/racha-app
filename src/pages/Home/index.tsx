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
          <NavLink to="/signin" title="Entrar">
            <button>Entrar</button>
          </NavLink>

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
