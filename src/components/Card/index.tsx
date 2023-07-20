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
  PlayerPaceValue,
  PlayerPaceLabel,
  PlayerShootingValue,
  PlayerShootingLabel,
  PlayerPassingValue,
  PlayerPassingLabel,
  PlayerDribblingValue,
  PlayerDribblingLabel,
  PlayerDefendingValue,
  PlayerDefendingLabel,
  PlayerPhysicalValue,
  PlayerPhysicalLabel,
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
        <PlayerAttributesTop>
          <PlayerPaceValue>85</PlayerPaceValue>
          <PlayerPaceLabel>pac</PlayerPaceLabel>
          <PlayerDribblingValue>95</PlayerDribblingValue>
          <PlayerDribblingLabel>dri</PlayerDribblingLabel>
        </PlayerAttributesTop>

        <PlayerAttributesMiddle>
          <PlayerShootingValue>92</PlayerShootingValue>
          <PlayerShootingLabel>sho</PlayerShootingLabel>
          <PlayerDefendingValue>34</PlayerDefendingValue>
          <PlayerDefendingLabel>def</PlayerDefendingLabel>
        </PlayerAttributesMiddle>

        <PlayerAttributesBottom>
          <PlayerPassingValue>91</PlayerPassingValue>
          <PlayerPassingLabel>pas</PlayerPassingLabel>
          <PlayerPhysicalValue>65</PlayerPhysicalValue>
          <PlayerPhysicalLabel>phy</PlayerPhysicalLabel>
        </PlayerAttributesBottom>
      </PlayerAttributesContainer>
      <PlayerName>Player name</PlayerName>
    </Container>
  )
}
