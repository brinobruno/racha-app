import styled from 'styled-components'

interface IListDataProps {
  isSelectedTab: boolean
}

export const ListData = styled.tr<IListDataProps>`
  background: ${(props) =>
    props.isSelectedTab
      ? props.theme['secondary-500']
      : props.theme['secondary-accent']};
  filter: ${(props) => props.isSelectedTab && 'brightness(1.1)'};

  transition: 0.1s ease-in-out;
  cursor: pointer;

  &:nth-child(even) {
    background: ${(props) =>
      props.isSelectedTab
        ? props.theme['secondary-500']
        : props.theme['secondary-accent-hover']};

    td {
      &.player-pos {
        background: ${(props) =>
          props.isSelectedTab
            ? props.theme['secondary-500']
            : props.theme['secondary-accent']};
        filter: contrast(0.85);
      }
    }
  }

  &:nth-child(odd) {
    td {
      &.player-pos {
        background: ${(props) =>
          props.isSelectedTab
            ? props.theme['secondary-500']
            : props.theme['secondary-700']};
        filter: contrast(0.8);
      }
    }
  }

  &:hover {
    filter: brightness(1.1);
  }

  td {
    color: ${(props) =>
      props.isSelectedTab ? '#E9EDF5' : props.theme['neutral-100']};

    padding: 0.25rem 0.75rem;
    max-height: 3.125rem;

    transition: 0.1s ease-in-out;
  }
`

export const DataBigger = styled.td`
  display: flex;
  align-items: center;
`

export const DataSmaller = styled.td`
  text-align: center;
`

export const PlayerNationality = styled.img`
  width: 32px;
`

export const PlayerPicture = styled.img`
  width: 42px;
  height: auto;
`
