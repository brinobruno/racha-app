import BaseGold from 'src/assets/card-overlays/base-gold.png'
import { Container, PlayerName, PlayerOverall } from './styles'

export function Card() {
  return (
    <Container style={{ backgroundImage: `url(${BaseGold})` }}>
      <PlayerOverall>93</PlayerOverall>
      <PlayerName>Player name</PlayerName>
    </Container>
  )
}
