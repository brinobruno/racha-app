import { useQuery } from 'react-query'

import { api } from 'src/services/api'

export interface IPlayerData {
  id: string
  team_id: string
  name: string
  known_as: string
  position: string
  nationality: string
  overall: number
  pace: number
  shooting: number
  passing: number
  dribbling: number
  defending: number
  physical: number
  active: boolean
  created_at: string
  updated_at: string
  deleted_at: string
}

type PlayersDataResponse = {
  players: IPlayerData[] | undefined
}

async function getPlayersFromTeamData(
  teamId: string,
): Promise<PlayersDataResponse> {
  const { data } = await api.get(
    `/users/teams/players/f40011b3-db40-4922-a26c-70a8b12da9a2`,
  )

  return data
}

export function usePlayersFromTeam(teamId: string) {
  return useQuery(
    ['playersFromTeam', teamId],
    () => getPlayersFromTeamData(teamId),
    {
      staleTime: 1000 * 60 * 5, // Will be fresh for 5 minutes
    },
  )
}
