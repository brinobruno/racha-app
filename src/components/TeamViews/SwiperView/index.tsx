import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { Card } from 'src/components/Card'
import { Container } from './styles'

interface IListViewProps {
  players: IPlayerData[]
}

export function SwiperView({ players }: IListViewProps) {
  return (
    <Container>
      {players.map((player) => (
        <div key={player.id}>
          <Card
            overall={player.overall}
            position={player.position}
            nationality={player.nationality}
            name={player.known_as}
            pace={player.pace}
            dribbling={player.dribbling}
            shooting={player.shooting}
            defending={player.defending}
            passing={player.passing}
            physical={player.physical}
          />
        </div>
      ))}
    </Container>
  )
}
