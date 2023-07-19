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

export const PlayerAttributesContainer = styled.div`
  position: absolute;
  top: 390px;
  left: 93px;
  z-index: 11;

  > div {
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
