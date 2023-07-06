import { useParams } from 'react-router-dom'

import { ITeamData, useTeams } from 'src/services/hooks/useTeams'

const findTeamById = (teams: ITeamData[], id: string | undefined) => {
  return teams.find((team) => team.id === id)
}

export function Team() {
  const { id } = useParams() // Access the ID from the URL
  const { data, isLoading, error } = useTeams()

  const teams = data?.teams ?? []

  const team = findTeamById(teams, id)

  console.log(team)

  return (
    <div>
      <h1>Meu Time</h1>

      <div>
        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}
      </div>

      <button>Criar jogador</button>
    </div>
  )
}
