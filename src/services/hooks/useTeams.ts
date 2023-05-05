import { useQuery } from 'react-query'
import { Cookies } from 'typescript-cookie'

import { api } from 'src/services/api'
import {
  // USER_ID_STORAGE_KEY,
  USER_SESSION_STORAGE_KEY,
  headers,
} from 'src/constants'

interface ITeamData {
  id: string
  user_id: string
  title: string
  owner: string
  badge_url: string
  active: boolean
  created_at: string
  updated_at: string
  deleted_at: string
}

type TeamDataResponse = {
  teams: ITeamData[] | undefined
}

async function getTeamsData(): Promise<TeamDataResponse> {
  const [userId, sessionIdValue] = await Promise.all([
    'f40011b3-db40-4922-a26c-70a8b12da9a2',
    Cookies.get(USER_SESSION_STORAGE_KEY),
  ])

  const response = await api.get(`/users/teams/all/${userId}`, {
    headers: {
      ...headers,
      // eslint-disable-next-line prettier/prettier
      'Cookies': `${sessionIdValue}`,
    },
  })

  const data = response.data

  return data
}

export function useTeams() {
  return useQuery('teams', getTeamsData, {
    staleTime: 1000 * 60 * 5, // Will be fresh for 5 minutes
  })
}
