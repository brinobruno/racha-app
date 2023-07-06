import { useTeams } from 'src/services/hooks/useTeams'

export function Team() {
  const { data, isLoading, error } = useTeams()

  const team = data ? data.teams : undefined

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
