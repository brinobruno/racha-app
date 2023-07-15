import BaseGold from 'src/assets/card-overlays/base-gold.png'
import { Container, PlayerName } from './styles'

export function Card() {
  return (
    <Container style={{ backgroundImage: `url(${BaseGold})` }}>
      <PlayerName>Player name</PlayerName>
    </Container>
  )
}
