import { useQuery } from 'react-query'
import { Cookies } from 'typescript-cookie'

import { api } from 'src/services/api'
import { USER_SESSION_STORAGE_KEY, headers } from 'src/constants'
import { ITeam } from 'src/contexts/TeamsContext'

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
    'a6cff3d1-fe45-4cef-b5b6-df77643162a8',
    Cookies.get(USER_SESSION_STORAGE_KEY),
  ])

  const teamsResponse = await api.get(`/users/teams/all/${userId}`, {
    headers: {
      ...headers,
      Cookies: `${sessionIdValue}`,
    },
  })

  const teams = teamsResponse.data.teams || []

  const teamsWithPlayers = await Promise.all(
    teams.map(async (team: ITeam) => {
      const playersResponse = await api.get(`/users/teams/players/${team.id}`, {
        headers: {
          ...headers,
          Cookies: `${sessionIdValue}`,
        },
      })
      const players = playersResponse.data.players || []
      return {
        ...team,
        players,
      }
    }),
  )

  return { teams: teamsWithPlayers }
}

export function useTeams() {
  return useQuery<TeamDataResponse>('teams', getTeamsData, {
    staleTime: 1000 * 60 * 5, // Will be fresh for 5 minutes
  })
}
