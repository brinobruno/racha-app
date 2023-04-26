import { useQuery } from 'react-query'
import { Cookies } from 'typescript-cookie'

import { api } from 'src/services/api'
import {
  // USER_ID_STORAGE_KEY,
  USER_SESSION_STORAGE_KEY,
  headers,
} from 'src/constants'

interface IPlayerData {
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

async function getPlayersFromTeamData(): Promise<PlayersDataResponse> {
  const [teamId, sessionIdValue] = await Promise.all([
    'f40011b3-db40-4922-a26c-70a8b12da9a2',
    Cookies.get(USER_SESSION_STORAGE_KEY),
  ])

  const response = await api.get(`/users/teams/players/${teamId}`, {
    headers: {
      ...headers,
      // eslint-disable-next-line prettier/prettier
      'Cookies': `${sessionIdValue}`,
    },
  })

  const data = response.data

  return data
}

export function usePlayersFromTeam() {
  return useQuery('playersFromTeam', getPlayersFromTeamData, {
    staleTime: 1000 * 5, // WIll be fresh for 5 seconds (!obsolete)
  })
}
