import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { ColumnHeading, ListHeaders } from './styles'

interface ITableHeadProps {
  requestSort: (key: keyof IPlayerData) => void // Adjust the parameter type
  getClassNamesFor: (name: string | undefined) => string | undefined
}

interface ITableColumn {
  title: string
  longHeading: boolean
  id: keyof IPlayerData
}

type TableColumns = ITableColumn[]

const tableColumns: TableColumns = [
  { title: 'Pos', id: 'position', longHeading: false },
  { title: 'País', id: 'nationality', longHeading: false },
  { title: 'Nome', id: 'name', longHeading: true },
  { title: 'OVR', id: 'overall', longHeading: false },
]

export function TableHead({ requestSort, getClassNamesFor }: ITableHeadProps) {
  return (
    <thead>
      <ListHeaders>
        {tableColumns.map((column) => (
          <ColumnHeading
            key={column.id}
            onClick={() => requestSort(column.id)}
            className={getClassNamesFor(column.id)}
            isLongColumn={column.longHeading}
          >
            {column.title}
          </ColumnHeading>
        ))}
      </ListHeaders>
    </thead>
  )
}
