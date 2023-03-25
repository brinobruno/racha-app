import { Container } from './styles'

import PlayerLight from 'src/assets/player-light.svg'

export function Dashboard() {
  return (
    <Container>
      <img src={PlayerLight} alt="" />

      <h1>Você ainda não possui times ou cartas registradas.</h1>

      <button>Criar time</button>
    </Container>
  )
}
