import { NameWithLineBreaks } from 'src/helpers/nameWithLineBreaks'
import {
  AttributeValue,
  Container,
  OverallWrapper,
  PlayerDetails,
  PlayerHeader,
} from './styles'

const tempName = 'Lionel Messi'

export function PlayerSummary() {
  return (
    <Container>
      <strong>Resumo & atributos</strong>

      <PlayerDetails>
        <PlayerHeader>
          <h2>
            <NameWithLineBreaks name={tempName} />
          </h2>

          <OverallWrapper>
            <span>OVR</span>
            <strong>86</strong>
          </OverallWrapper>
        </PlayerHeader>

        <span>Pace:</span>
        <AttributeValue attributeWidthValue={75} />
      </PlayerDetails>
    </Container>
  )
}
