import { useMemo, useState } from 'react'
import { getCode } from 'country-list'

import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { PlayerSummary } from '../../PlayerSummary'
import {
  PlayerTable,
  ListHeaders,
  ListData,
  PlayerNationality,
  PlayerPicture,
  DataBigger,
  Container,
  HeadingSmaller,
  HeadingBigger,
  DataSmaller,
  TableScrollWrapper,
} from './styles'

interface IListViewProps {
  players: IPlayerData[]
}

export const useSortableData = (items: IPlayerData[], config = null) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string
    direction: string
  } | null>(config)

  const sortedPlayers = useMemo(() => {
    const sortableItems = [...items]

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (
          a[sortConfig.key as keyof IPlayerData] <
          b[sortConfig.key as keyof IPlayerData]
        ) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (
          a[sortConfig.key as keyof IPlayerData] >
          b[sortConfig.key as keyof IPlayerData]
        ) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }

        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key: any) => {
    let direction = 'ascending'

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }

    setSortConfig({ key, direction } as { key: string; direction: string })
  }

  return { items: sortedPlayers, requestSort, sortConfig }
}

export function ListView({ players }: IListViewProps) {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])

  const {
    items: sortedPlayers,
    requestSort,
    sortConfig,
  } = useSortableData(players)

  const getClassNamesFor = (name: string | undefined) => {
    if (!sortConfig) {
      return
    }

    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  return (
    <Container>
      <TableScrollWrapper>
        <PlayerTable>
          {/* Implement color on overall value on table */}
          <thead>
            <ListHeaders>
              <HeadingSmaller
                onClick={() => requestSort('position')}
                className={getClassNamesFor('position')}
              >
                Pos
              </HeadingSmaller>
              <HeadingSmaller
                onClick={() => requestSort('country')}
                className={getClassNamesFor('country')}
              >
                País
              </HeadingSmaller>
              <HeadingBigger
                onClick={() => requestSort('name')}
                className={getClassNamesFor('name')}
              >
                Nome
              </HeadingBigger>
              <HeadingSmaller
                onClick={() => requestSort('overall')}
                className={getClassNamesFor('overall')}
              >
                OVR
              </HeadingSmaller>
            </ListHeaders>
          </thead>

          <tbody>
            {players &&
              sortedPlayers.map((player: IPlayerData) => (
                <ListData
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  isSelectedTab={player === selectedPlayer}
                >
                  <DataSmaller className="player-pos">
                    {player.position}
                  </DataSmaller>
                  <DataSmaller>
                    <PlayerNationality
                      src={`https://flagsapi.com/${getCode(
                        player.nationality,
                      )}/flat/64.png`}
                      alt=""
                    />
                  </DataSmaller>
                  <DataBigger>
                    <PlayerPicture
                      src="https://www.fifarosters.com/assets/players/fifa23/faces/158023.png"
                      alt={player.name}
                    />
                    {player.name}
                  </DataBigger>
                  <DataSmaller>{player.overall}</DataSmaller>
                </ListData>
              ))}
          </tbody>
        </PlayerTable>
      </TableScrollWrapper>

      <PlayerSummary player={selectedPlayer} />
    </Container>
  )
}
