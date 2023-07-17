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

export const PlayerName = styled.div`
  font-weight: 600;
  font-size: 48px;
  text-align: center;
  white-space: nowrap;

  position: absolute;
  z-index: 1;
  top: 335px;
  left: 54px;

  overflow: hidden;
  width: 344px;
  /* 11.5% */
`

export const PlayerOverall = styled.div`
  font-family: 'DinProCondReg';
  font-size: 76px;
  font-weight: 500;
  position: absolute;
  top: 75px;
  left: 86px;
  width: 85px;
  text-align: center;
  z-index: 11;
`

export const PlayerPosition = styled.div`
  font-family: 'DinProCondReg';
  font-size: 34px;
  position: absolute;
  top: 151px;
  left: 86px;
  width: 85px;
  text-align: center;
  z-index: 11;
`
