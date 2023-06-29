import { useQuery } from 'react-query'
import { Cookies } from 'typescript-cookie'

import { api } from 'src/services/api'
import { authHeader } from '../auth/authHeader'
import { USER_ID_STORAGE_KEY } from 'src/constants'
import { ITeam } from 'src/contexts/TeamsContext'
import { IPlayerData } from './usePlayersFromTeam'

export interface ITeamData {
  id: string
  user_id: string
  title: string
  owner: string
  badge_url: string
  players: IPlayerData[]
  active: boolean
  created_at: string
  updated_at: string
  deleted_at: string
}

type TeamDataResponse = {
  teams: ITeamData[] | undefined
}

async function getTeamsData(): Promise<TeamDataResponse> {
  const userId = Cookies.get(USER_ID_STORAGE_KEY)

  const teamsResponse = await api.get(
    `/users/teams/all/${userId}`,
    authHeader(),
  )

  const teams = teamsResponse.data.teams || []

  const teamsWithPlayers = await Promise.all(
    teams.map(async (team: ITeam) => {
      const playersResponse = await api.get(
        `/users/teams/players/${team.id}`,
        authHeader(),
      )
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
