import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'

export function calculateTeamOverall(players: IPlayerData[]): number {
  if (players.length === 0) return 0

  const totalOverall = players.reduce((sum, player) => sum + player.overall, 0)
  const teamOverall = totalOverall / players.length

  return Math.floor(teamOverall)
}
