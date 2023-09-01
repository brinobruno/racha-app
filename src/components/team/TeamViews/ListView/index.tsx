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
  PlayerDetails,
  OverallWrapper,
  PlayerHeader,
} from './styles'
import { getCode } from 'country-list'
import { NameWithLineBreaks } from 'src/helpers/nameWithLineBreaks'

interface IListViewProps {
  players: IPlayerData[]
}

const tempName = 'Lionel Messi'

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
        <strong>Resumo & atributos</strong>

        <PlayerDetails>
          <PlayerHeader>
            <h2>
              <NameWithLineBreaks name={tempName} />
            </h2>

            <OverallWrapper>
              <span>OVR</span>
              <strong>86</strong>
            </OverallWrapper>
          </PlayerHeader>

          <span>Pace:</span>
          <AttributeValue attributeWidthValue={75} />
        </PlayerDetails>
      </PlayerSummary>
    </Container>
  )
}
