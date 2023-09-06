import { useEffect, useState } from 'react'
import { getCode } from 'country-list'

import { useSortableData } from 'src/hooks/useSortableData'
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

export function ListView({ players }: IListViewProps) {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])

  const {
    items: sortedPlayers,
    requestSort,
    sortConfig,
  } = useSortableData(players)

  useEffect(() => setSelectedPlayer(sortedPlayers[0]), [sortedPlayers])

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
                onClick={() => requestSort('nationality')}
                className={getClassNamesFor('nationality')}
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
