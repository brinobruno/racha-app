import { useState } from 'react'

import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
// import { Card } from 'src/components/team/Card'
import { Container } from './styles'

interface IListViewProps {
  players: IPlayerData[]
}

export function PitchView({ players }: Readonly<IListViewProps>) {
  const [DrawChoice, setDrawChoice] = useState(null)

  return (
    <Container>
      <h6>Draw team</h6>

      <p>
        You have <strong>{players.length}</strong> players in this squad. <br />
        How many teams would you like to split into?
      </p>

      <form>
        <div>
          <button>2 teams</button>

          <button>3 teams</button>

          <button>4 teams</button>

          <button>Custom: ___</button>
        </div>

        <button>Draw</button>
      </form>

      {/* {PlayersData.map((player) => (
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
      ))} */}
    </Container>
  )
}
