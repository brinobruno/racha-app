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
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2rem;

    span {
      font-size: 1rem;
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
    font-family: 'DinProCondReg';
    font-weight: 400;
    line-height: 80%;
  }

  span {
    font-size: 2rem;
  }

  strong {
    font-size: 4rem;
  }
`

export const Attributes = styled.div``

export const AttributeValue = styled.div<IPlayerSummaryData>`
  width: ${(props) => props.attributeWidthValue}%;
  height: 20px;
  background-color: #fff;
`
