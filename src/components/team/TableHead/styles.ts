import styled from 'styled-components'

interface IColumnHeadingProps {
  isLongColumn: boolean
}

export const ListHeaders = styled.tr`
  background: ${(props) => props.theme['secondary-600']};

  position: sticky;
  top: 0;
`

export const ColumnHeading = styled.th<IColumnHeadingProps>`
  width: ${(props) => (props.isLongColumn ? '64%' : '12%')};

  font-size: 1.125rem;
  font-weight: 500;
  text-align: left;

  padding: 0.75rem;

  span {
    display: inline-flex;
    align-items: center;

    ::after {
      display: inline-block;
      margin-left: 0.25rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['secondary-200']};
    }

    &.ascending::after {
      content: '▼';
    }

    &.descending::after {
      content: '▲';
    }
  }
`
