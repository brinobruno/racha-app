import { getCode } from 'country-list'

import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import {
  DataBigger,
  DataSmaller,
  ListData,
  PlayerNationality,
  PlayerPicture,
} from './styles'
import { getColorBreakpoint } from 'src/helpers/getColorBreakpoint'

interface IPlayerListItemProps {
  player: IPlayerData
  isSelected: boolean
  onClick: (player: IPlayerData) => void
}

export function TableDataPlayer({
  player,
  isSelected,
  onClick,
}: IPlayerListItemProps) {
  return (
    <ListData
      key={player.id}
      onClick={() => onClick(player)}
      isSelectedTab={isSelected}
    >
      <DataSmaller className="player-pos">{player.position}</DataSmaller>
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
      <DataSmaller
        className="player-ovr"
        overallColorValue={getColorBreakpoint(player.pace)}
      >
        {player.overall}
      </DataSmaller>
    </ListData>
  )
}
