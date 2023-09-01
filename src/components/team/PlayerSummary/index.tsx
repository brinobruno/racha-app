import { NameWithLineBreaks } from 'src/helpers/nameWithLineBreaks'
import {
  Attribute,
  AttributeValue,
  Attributes,
  Container,
  OverallWrapper,
  PlayerDetails,
  PlayerHeader,
} from './styles'

const tempName = 'Lionel Messi'

const breakpoints = {
  0: 'orange',
  65: 'yellow',
  80: 'green',
}

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

        <Attributes>
          <Attribute>
            <div>
              <span>Pace:</span>
              <AttributeValue attributeWidthValue={75} />
            </div>

            <span>81</span>
          </Attribute>
        </Attributes>
      </PlayerDetails>
    </Container>
  )
}
