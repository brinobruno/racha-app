import { getCode } from 'country-list'

import BaseGold from 'src/assets/card-overlays/base-gold.png'
import {
  Container,
  PlayerAttributesBottom,
  PlayerAttributesContainer,
  PlayerAttributesMiddle,
  PlayerAttributesTop,
  PlayerName,
  PlayerNationality,
  PlayerOverall,
  PlayerPosition,
} from './styles'

export function Card() {
  const playerCountryCode = getCode('brazil')

  return (
    <Container style={{ backgroundImage: `url(${BaseGold})` }}>
      <PlayerOverall>93</PlayerOverall>
      <PlayerPosition>RW</PlayerPosition>
      <PlayerNationality>
        <img
          src={`https://flagsapi.com/${playerCountryCode}/flat/64.png`}
          alt=""
        />
      </PlayerNationality>

      <PlayerAttributesContainer>
        <PlayerAttributesTop></PlayerAttributesTop>
        <PlayerAttributesMiddle></PlayerAttributesMiddle>
        <PlayerAttributesBottom></PlayerAttributesBottom>
      </PlayerAttributesContainer>
      <PlayerName>Player name</PlayerName>
    </Container>
  )
}
