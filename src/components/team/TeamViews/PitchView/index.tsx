import { useState } from 'react'

import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
// import { Card } from 'src/components/team/Card'
import { Container } from './styles'

interface IListViewProps {
  players: IPlayerData[]
}

export function PitchView({ players }: Readonly<IListViewProps>) {
  const [drawChoice, setDrawChoice] = useState<number | null>(null)

  // Function to handle the user's draw choice
  const handleDrawChoice = (choice: number) => {
    setDrawChoice(choice)
  }

  const calculateTeamSizes = (choice: number) => {
    // const teamSize = Math.floor(players.length + 11 / choice)
    // const remainingPlayers = (players.length + 11) % choice

    const teamSize = Math.floor(players.length + 11 / choice)
    const remainingPlayers = (players.length + 11) % choice

    return { teamSize, remainingPlayers }
  }

  const handleDrawButtonClick = () => {
    if (drawChoice !== null) {
      const { teamSize, remainingPlayers } = calculateTeamSizes(drawChoice)

      // Perform actions based on the draw choice, team size, and remaining players
      console.log(
        `Draw ${drawChoice} teams with ${teamSize} players each. Remaining players: ${remainingPlayers}`,
      )
    }
  }

  return (
    <Container>
      <h6>Draw team</h6>

      <p>
        You have <strong>{players.length + 11}</strong> players in this squad.{' '}
        <br />
        How many teams would you like to split into?
      </p>

      <form>
        <div>
          {[2, 3, 4].map((choice) => {
            const { teamSize, remainingPlayers } = calculateTeamSizes(choice)
            return (
              <div key={choice}>
                <button
                  onClick={() => handleDrawChoice(choice)}
                >{`${choice} teams`}</button>
                <span>{`${choice} teams of ${teamSize} players. Remaining players: ${remainingPlayers}`}</span>
              </div>
            )
          })}

          <button>Custom: ___</button>
        </div>

        <button type="button" onClick={handleDrawButtonClick}>
          Draw
        </button>
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
