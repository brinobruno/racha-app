import { useTeams } from './useTeams'

// Custom hook to check if the user has teams
export function useUserHasTeams(): boolean {
  const { data, isLoading, isError } = useTeams()

  if (isLoading || isError) return false

  // If the data is available, check if the user has any teams
  if (data?.teams && data.teams.length > 0) return true

  // If user does not have any teams
  return false
}
