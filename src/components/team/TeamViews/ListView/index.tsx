import { useEffect, useState } from 'react'

import { useSortableData } from 'src/hooks/useSortableData'
import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { PlayerSummary } from '../../PlayerSummary'
import { TableHead } from '../../TableHead'
import { TableDataPlayer } from '../../TableDataPlayer'
import { Container, PlayerTable, TableScrollWrapper } from './styles'

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
          <TableHead
            requestSort={requestSort}
            getClassNamesFor={getClassNamesFor}
          />

          <tbody>
            {players &&
              sortedPlayers.map((player: IPlayerData) => (
                <TableDataPlayer
                  key={player.id}
                  player={player}
                  isSelected={player === selectedPlayer}
                  onClick={setSelectedPlayer}
                />
              ))}
          </tbody>
        </PlayerTable>
      </TableScrollWrapper>

      <PlayerSummary player={selectedPlayer} />
    </Container>
  )
}
