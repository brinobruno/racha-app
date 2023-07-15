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
`
