import BaseGold from 'src/assets/card-overlays/base-gold.png'
import {
  Container,
  PlayerName,
  PlayerNationality,
  PlayerOverall,
  PlayerPosition,
} from './styles'

export function Card() {
  return (
    <Container style={{ backgroundImage: `url(${BaseGold})` }}>
      <PlayerOverall>93</PlayerOverall>
      <PlayerPosition>RW</PlayerPosition>
      <PlayerNationality />
      <PlayerName>Player name</PlayerName>
    </Container>
  )
}
