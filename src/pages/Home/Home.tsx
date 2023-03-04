import Cover from './../../assets/desktop-cover.webp'

import 'react-toastify/dist/ReactToastify.css'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <img src={Cover} alt="" />

      <h1>Gerencie times para jogar com os amigos</h1>
    </Container>
  )
}
