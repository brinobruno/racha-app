import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { Container, ListItem } from './styles'

interface IListViewProps {
  players: IPlayerData[]
}

export function ListView({ players }: IListViewProps) {
  return (
    <Container>
      {players.map((player) => (
        <div key={player.id}>
          <ListItem>
            <div>
              <span>{player.position}</span>
              <strong>{player.name}</strong>
            </div>

            <div>
              <span>{player.overall}</span>
            </div>
          </ListItem>
        </div>
      ))}
    </Container>
  )
}
