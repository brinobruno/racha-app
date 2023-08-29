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
  PlayerPicture,
} from './styles'

interface IPlayerCardProps {
  overall: number
  position: string
  nationality: string
  name: string
  pace: number
  dribbling: number
  shooting: number
  defending: number
  passing: number
  physical: number
}

export function Card({
  overall,
  position,
  nationality,
  name,
  pace,
  dribbling,
  shooting,
  defending,
  passing,
  physical,
}: IPlayerCardProps) {
  const playerCountryCode = getCode(nationality)

  return (
    <Container style={{ backgroundImage: `url(${BaseGold})` }}>
      <PlayerOverall>{overall}</PlayerOverall>
      <PlayerPosition>{position}</PlayerPosition>

      <PlayerNationality>
        <img
          src={`https://flagsapi.com/${playerCountryCode}/flat/64.png`}
          alt=""
        />
      </PlayerNationality>

      <PlayerPicture>
        <div>
          <img
            src="https://www.fifarosters.com/assets/players/fifa23/faces/158023.png"
            alt={name}
          />
        </div>
      </PlayerPicture>

      <PlayerName>{name}</PlayerName>

      <PlayerAttributesContainer>
        <PlayerAttributesTop>
          <PlayerPaceValue>{pace}</PlayerPaceValue>
          <PlayerPaceLabel>pac</PlayerPaceLabel>
          <PlayerDribblingValue>{dribbling}</PlayerDribblingValue>
          <PlayerDribblingLabel>dri</PlayerDribblingLabel>
        </PlayerAttributesTop>

        <PlayerAttributesMiddle>
          <PlayerShootingValue>{shooting}</PlayerShootingValue>
          <PlayerShootingLabel>sho</PlayerShootingLabel>
          <PlayerDefendingValue>{defending}</PlayerDefendingValue>
          <PlayerDefendingLabel>def</PlayerDefendingLabel>
        </PlayerAttributesMiddle>

        <PlayerAttributesBottom>
          <PlayerPassingValue>{passing}</PlayerPassingValue>
          <PlayerPassingLabel>pas</PlayerPassingLabel>
          <PlayerPhysicalValue>{physical}</PlayerPhysicalValue>
          <PlayerPhysicalLabel>phy</PlayerPhysicalLabel>
        </PlayerAttributesBottom>
      </PlayerAttributesContainer>
    </Container>
  )
}
