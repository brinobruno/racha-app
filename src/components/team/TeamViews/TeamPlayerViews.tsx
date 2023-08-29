import { AvailableViewType } from 'src/pages/User/Team'
import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { PitchView } from './PitchView'
import { SwiperView } from './SwiperView'
import { ListView } from './ListView'

interface ITeamPlayerViewsProps {
  selectedView: AvailableViewType
  teamHasPlayers: boolean
  teamPlayers: IPlayerData[]
}

export function TeamPlayerViews({
  selectedView,
  teamHasPlayers,
  teamPlayers,
}: ITeamPlayerViewsProps) {
  return (
    <div className="TeamPlayerViews">
      {teamHasPlayers && (
        <>
          {selectedView === 'pitch' && <PitchView players={teamPlayers} />}
          {selectedView === 'swiper' && <SwiperView players={teamPlayers} />}
          {selectedView === 'list' && <ListView players={teamPlayers} />}
        </>
      )}
    </div>
  )
}
