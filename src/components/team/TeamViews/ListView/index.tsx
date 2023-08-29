import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { Container, ListHeaders, ListData } from './styles'

interface IListViewProps {
  players: IPlayerData[]
}

export function ListView({ players }: IListViewProps) {
  return (
    <Container>
      {/* Implement filters by clicking on a table, e.g: POS, OVR */}
      <ListHeaders>
        <th>Pos</th>
        <th>Name</th>
        <th>OVR</th>
      </ListHeaders>

      {players.map((player) => (
        <ListData key={player.id}>
          <td>{player.position}</td>
          <td>{player.name}</td>
          <td>{player.overall}</td>
        </ListData>
      ))}
    </Container>
  )
}
