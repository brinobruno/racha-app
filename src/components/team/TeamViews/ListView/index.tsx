import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import {
  PlayerTable,
  ListHeaders,
  ListData,
  PlayerNationality,
  PlayerPicture,
  DataBigger,
  Container,
  PlayerSummary,
  HeadingSmaller,
  HeadingBigger,
  DataSmaller,
  TableScrollWrapper,
  AttributeValue,
} from './styles'
import { getCode } from 'country-list'

interface IListViewProps {
  players: IPlayerData[]
}

export function ListView({ players }: IListViewProps) {
  return (
    <Container>
      <TableScrollWrapper>
        <PlayerTable>
          {/* Implement filters by clicking on a table, e.g: POS, OVR */}
          {/* Add fixed height, and scroll inside of table */}
          <thead>
            <ListHeaders>
              <HeadingSmaller>Pos</HeadingSmaller>
              <HeadingSmaller>País</HeadingSmaller>
              <HeadingBigger>Nome</HeadingBigger>
              <HeadingSmaller>OVR</HeadingSmaller>
            </ListHeaders>
          </thead>

          <tbody>
            {players.map((player) => (
              <ListData key={player.id}>
                <DataSmaller>{player.position}</DataSmaller>
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

      <PlayerSummary>
        <strong>Player summary</strong>
        <h2>Lionel Messi</h2>
        <span>92 OVR</span>

        <span>Pace:</span>
        <AttributeValue attributeWidthValue={75} />
        <AttributeValue attributeWidthValue={85} />
      </PlayerSummary>
    </Container>
  )
}
