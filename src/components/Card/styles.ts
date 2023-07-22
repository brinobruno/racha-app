import styled from 'styled-components'

export const Container = styled.div`
  display: block;

  width: 450px;
  height: 650px;

  background-size: 465px 650px;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  z-index: 0;

  font-family: 'DinProCondMed';
  color: #46390c;
  text-transform: uppercase;
  line-height: normal;
`

const PlayerMainData = styled.div`
  position: absolute;
  font-family: 'DinProCondReg';
  text-align: center;
  z-index: 1;
`

const PlayerAttributeData = styled.div`
  font-size: 44px;
`

const PlayerAttributeValue = styled(PlayerAttributeData)`
  font-family: 'DinProCondBold';
`

const PlayerAttributeLabel = styled(PlayerAttributeData)`
  font-family: 'DinProCondMed';
  color: #645215;
`

export const PlayerName = styled(PlayerMainData)`
  font-weight: 600;
  font-size: 48px;
  text-align: center;
  white-space: nowrap;

  top: 335px;
  left: 54px;

  overflow: hidden;
  width: 344px;
  /* 11.5% */
`

export const PlayerOverall = styled(PlayerMainData)`
  font-size: 76px;
  top: 75px;
  left: 86px;
  width: 85px;
`

export const PlayerPosition = styled(PlayerMainData)`
  font-size: 34px;
  top: 151px;
  left: 86px;
  width: 85px;
`

export const PlayerNationality = styled(PlayerMainData)`
  top: 195px;
  left: 96px;
`

export const PlayerPicture = styled(PlayerMainData)`
  right: 51px;
  top: 72px;
  overflow: hidden;

  width: 265px;
  height: 265px;

  div {
    position: absolute;
    top: 0px;
    left: 0px;

    img {
      height: 265px;
      width: 100%;
    }
  }
`

export const PlayerAttributesContainer = styled.div`
  position: absolute;
  top: 390px;
  left: 90px;
  z-index: 11;

  div {
    position: absolute;
  }
`

export const PlayerAttributesTop = styled.div`
  top: 2px;
`

export const PlayerAttributesMiddle = styled.div`
  top: 43px;
`

export const PlayerAttributesBottom = styled.div`
  top: 85px;
`

export const PlayerPaceValue = styled(PlayerAttributeValue)``

export const PlayerPaceLabel = styled(PlayerAttributeLabel)`
  left: 42px;
`

export const PlayerShootingValue = styled(PlayerAttributeValue)``

export const PlayerShootingLabel = styled(PlayerAttributeLabel)`
  left: 42px;
`

export const PlayerPassingValue = styled(PlayerAttributeValue)``

export const PlayerPassingLabel = styled(PlayerAttributeLabel)`
  left: 42px;
`

export const PlayerDribblingValue = styled(PlayerAttributeValue)`
  left: 176px;
`

export const PlayerDribblingLabel = styled(PlayerAttributeLabel)`
  left: 220px;
`

export const PlayerDefendingValue = styled(PlayerAttributeValue)`
  left: 176px;
`

export const PlayerDefendingLabel = styled(PlayerAttributeLabel)`
  left: 220px;
`

export const PlayerPhysicalValue = styled(PlayerAttributeValue)`
  left: 176px;
`

export const PlayerPhysicalLabel = styled(PlayerAttributeLabel)`
  left: 220px;
`
