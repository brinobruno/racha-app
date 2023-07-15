import BaseGold from 'src/assets/card-overlays/base-gold.png'
import { Container } from './styles'

export function Card() {
  return (
    <Container style={{ backgroundImage: `url(${BaseGold})` }}>
      <h6>Player name</h6>
    </Container>
  )
}
