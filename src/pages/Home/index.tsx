import Cover from './../../assets/desktop-cover.webp'

import 'react-toastify/dist/ReactToastify.css'
import { Container } from './styles'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <div>
        <img src={Cover} alt="" />
      </div>

      <div>
        <h1>Gerencie times para jogar com os amigos</h1>

        <NavLink to="/signin" title="Entrar">
          Entrar
        </NavLink>
      </div>
    </Container>
  )
}
