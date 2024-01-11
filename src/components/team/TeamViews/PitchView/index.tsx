import { FormEvent, useState } from 'react'

import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { Container } from './styles'
import { ITeam } from 'src/contexts/TeamsContext'
// import { Card } from 'src/components/team/Card'

interface IListViewProps {
  players: IPlayerData[]
}

// Modify this interface later since sorted teams don't need attributes such as
// Owner, user_id, title, etc.
interface IDrawTeam extends ITeam {
  players: IPlayerData[]
}

export function PitchView({ players }: Readonly<IListViewProps>) {
  const [drawChoice, setDrawChoice] = useState<number | null>(null)
  const [teams, setTeams] = useState<IDrawTeam[] | null>(null)

  const calculateTeamSizes = (choice: number) => {
    const teamSize = Math.floor(players.length / choice)
    const remainingPlayers = players.length % choice

    return { teamSize, remainingPlayers }
  }

  const drawTeams = (allPlayers: IPlayerData[], numTeams: number) => {
    const sortedPlayers = [...allPlayers].sort((a, b) => b.overall - a.overall)

    const { teamSize, remainingPlayers } = calculateTeamSizes(numTeams)

    const teams: IDrawTeam[] = Array.from({ length: numTeams }, (_, index) => {
      const startIndex = index * teamSize
      const endIndex =
        index === numTeams - 1
          ? startIndex + teamSize + remainingPlayers
          : startIndex + teamSize

      return {
        id: `${index + 1}`,
        user_id: '',
        title: `Team ${index + 1}`,
        owner: '',
        players: sortedPlayers.slice(startIndex, endIndex),
      }
    })

    return teams
  }

  const handleDrawChoice = (choice: number) => {
    setDrawChoice(choice)

    const calculatedTeams = drawTeams(players, choice)
    setTeams(calculatedTeams)
  }

  const handleDrawButtonClick = () => {
    if (drawChoice !== null) {
      console.log(`Draw ${drawChoice} teams with the following distribution:`)

      teams?.forEach((team, index) => {
        console.log(
          `Team ${index + 1}: ${team.players
            .map((player) => `${player.name} (${player.overall})`)
            .join(', ')}`,
        )
      })
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    event.preventDefault()

    if (drawChoice !== null) {
      const calculatedTeams = drawTeams(players, drawChoice)

      console.log(`Draw ${drawChoice} teams with the following distribution:`)

      calculatedTeams.forEach((team, index) => {
        console.log(
          `Team ${index + 1}: ${team.players
            .map((player) => `${player.name} (${player.overall})`)
            .join(', ')}`,
        )
      })

      setTeams(calculatedTeams)
    }
  }

  return (
    <Container>
      <h6>Draw team</h6>

      <p>
        You have <strong>{players.length}</strong> players in this squad. <br />
        How many teams would you like to split into?
      </p>

      <form onSubmit={handleSubmit}>
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

      {/* Display sorted teams */}
      {teams && (
        <div>
          <h6>Teams</h6>
          {teams.map((team, index) => (
            <div key={index}>
              <strong>Team {index + 1}</strong>
              {team.players.map((player) => (
                <p key={player.id}>{`${player.name} (${player.overall})`}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </Container>
  )
}

/* {PlayersData.map((player) => (
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
      ))} */
