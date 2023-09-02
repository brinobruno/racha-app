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

        <div>a</div>

        <Attributes>
          <Attribute>
            <div>
              <AttributeValue attributeWidthValue={85}>
                <span>Pace:</span>
              </AttributeValue>
            </div>
            <span>85</span>
          </Attribute>

          <Attribute>
            <div>
              <AttributeValue attributeWidthValue={91}>
                <span>Shooting:</span>
              </AttributeValue>
            </div>
            <span>91</span>
          </Attribute>

          <Attribute>
            <div>
              <AttributeValue attributeWidthValue={89}>
                <span>Passing:</span>
              </AttributeValue>
            </div>
            <span>89</span>
          </Attribute>

          <Attribute>
            <div>
              <AttributeValue attributeWidthValue={90}>
                <span>Dribbling:</span>
              </AttributeValue>
            </div>
            <span>90</span>
          </Attribute>

          <Attribute>
            <div>
              <AttributeValue attributeWidthValue={34}>
                <span>Defending:</span>
              </AttributeValue>
            </div>
            <span>34</span>
          </Attribute>

          <Attribute>
            <div>
              <AttributeValue attributeWidthValue={62}>
                <span>Physical:</span>
              </AttributeValue>
            </div>
            <span>62</span>
          </Attribute>
        </Attributes>
      </PlayerDetails>
    </Container>
  )
}
