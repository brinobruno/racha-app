import styled from 'styled-components'

interface IPlayerSummaryData {
  attributeWidthValue: number
}

export const Container = styled.div`
  width: 35%;
  height: auto;

  background: ${(props) => props.theme['secondary-600']};

  > strong {
    display: inline-block;
    background: ${(props) => props.theme['secondary-accent']};
    width: 100%;
    padding: 0.75rem;

    font-weight: 600;
    text-transform: uppercase;
  }
`

export const PlayerDetails = styled.div`
  padding: 0.75rem;
`

export const PlayerHeader = styled.header`
  padding-bottom: 1rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 0.5rem;
  }

  h2 {
    font-family: 'DinProCondReg', 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 2.25rem;

    span {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`

export const OverallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  text-align: center;

  span,
  strong {
    font-family: 'DinProCondReg', 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 80%;
  }

  span {
    font-size: 1.35rem;
    color: ${(props) => props.theme['neutral-500']};
  }

  strong {
    font-size: 2.875rem;
  }
`

export const ExtraInfo = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  * {
    font-size: 0.75rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  img {
    width: 24px;
  }
`

export const PositionWrapper = styled.div`
  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: blue;
    border: 2px solid ${(props) => props.theme['neutral-100']};
  }
`

export const Attributes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Attribute = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0.25rem;

  > div {
    width: 90%;
  }

  > span {
    background: green;
    padding: 0 0.75rem;
    height: 20px;
  }
`

export const AttributeValue = styled.div<IPlayerSummaryData>`
  width: ${(props) => props.attributeWidthValue}%;
  height: 20px;
  background-color: green;
  color: ${(props) => props.theme['neutral-400']};
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`
