import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { Container, ListItem } from './styles'

interface IListViewProps {
  players: IPlayerData[]
}

export function ListView({ players }: IListViewProps) {
  return (
    <Container>
      {/* Implement filters by clicking on a table, e.g: POS, OVR */}
      <table>
        <tr>
          <th>Pos</th>
          <th>Name</th>
          <th>OVR</th>
        </tr>

        {players.map((player) => (
          <ListItem key={player.id}>
            <td>{player.position}</td>
            <td>{player.name}</td>
            <td>{player.overall}</td>
          </ListItem>
        ))}
      </table>
    </Container>
  )
}
