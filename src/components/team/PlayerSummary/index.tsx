import { getCode } from 'country-list'

import { NameWithLineBreaks } from 'src/helpers/nameWithLineBreaks'
import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import {
  Attribute,
  AttributeValue,
  Attributes,
  Container,
  ExtraInfo,
  OverallWrapper,
  PlayerDetails,
  PlayerHeader,
  PositionWrapper,
} from './styles'

interface IPlayerSummary {
  player: IPlayerData
}

// Bronze: 64 or below
// Silver: 65 until 74
// Gold: 75 or above
const breakpoints = {
  orange: 0,
  yellow: 64,
  green: 74,
}

function getColorBreakpoint(value: number): string {
  if (value <= breakpoints.yellow) {
    return '#dd680f'
  } else if (value <= breakpoints.green) {
    return '#e1bf00'
  } else {
    return '#128705'
  }
}

export function PlayerSummary({ player }: IPlayerSummary) {
  return (
    <Container>
      <strong>Resumo & atributos</strong>

      <PlayerDetails>
        <PlayerHeader>
          <div>
            <h2>
              <NameWithLineBreaks name={player.name} />
            </h2>

            <OverallWrapper>
              <span>OVR</span>
              <strong>{player.overall}</strong>
            </OverallWrapper>
          </div>

          <ExtraInfo>
            <PositionWrapper>{player.position}</PositionWrapper>

            <span>|</span>

            <div>
              <img
                src={`https://flagsapi.com/${getCode(
                  player.nationality,
                )}/flat/64.png`}
                alt={player.nationality}
              />
              {player.nationality}
            </div>
          </ExtraInfo>
        </PlayerHeader>

        <Attributes>
          <Attribute attributeColorValue={getColorBreakpoint(player.pace)}>
            <div>
              <AttributeValue
                attributeWidthValue={player.pace}
                attributeColorValue={getColorBreakpoint(player.pace)}
                attributeColorToneValue={`0.${player.pace}`}
              >
                <span>Pace:</span>
              </AttributeValue>
            </div>
            <span>{player.pace}</span>
          </Attribute>

          <Attribute attributeColorValue={getColorBreakpoint(player.shooting)}>
            <div>
              <AttributeValue
                attributeWidthValue={player.shooting}
                attributeColorValue={getColorBreakpoint(player.shooting)}
                attributeColorToneValue={`0.${player.shooting}`}
              >
                <span>Shooting:</span>
              </AttributeValue>
            </div>
            <span>{player.shooting}</span>
          </Attribute>

          <Attribute attributeColorValue={getColorBreakpoint(player.passing)}>
            <div>
              <AttributeValue
                attributeWidthValue={player.passing}
                attributeColorValue={getColorBreakpoint(player.passing)}
                attributeColorToneValue={`0.${player.passing}`}
              >
                <span>Passing:</span>
              </AttributeValue>
            </div>
            <span>{player.passing}</span>
          </Attribute>

          <Attribute attributeColorValue={getColorBreakpoint(player.dribbling)}>
            <div>
              <AttributeValue
                attributeWidthValue={player.dribbling}
                attributeColorValue={getColorBreakpoint(player.dribbling)}
                attributeColorToneValue={`0.${player.dribbling}`}
              >
                <span>Dribbling:</span>
              </AttributeValue>
            </div>
            <span>{player.dribbling}</span>
          </Attribute>

          <Attribute attributeColorValue={getColorBreakpoint(player.defending)}>
            <div>
              <AttributeValue
                attributeWidthValue={player.defending}
                attributeColorValue={getColorBreakpoint(player.defending)}
                attributeColorToneValue={`0.${player.defending}`}
              >
                <span>Defending:</span>
              </AttributeValue>
            </div>
            <span>{player.defending}</span>
          </Attribute>

          <Attribute attributeColorValue={getColorBreakpoint(player.physical)}>
            <div>
              <AttributeValue
                attributeWidthValue={player.physical}
                attributeColorValue={getColorBreakpoint(player.physical)}
                attributeColorToneValue={`0.${player.physical}`}
              >
                <span>Physical:</span>
              </AttributeValue>
            </div>
            <span>{player.physical}</span>
          </Attribute>
        </Attributes>
      </PlayerDetails>
    </Container>
  )
}
