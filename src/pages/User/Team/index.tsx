import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useTheme } from 'styled-components'

import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import {
  Container,
  TeamDataContainer,
  PlayerContainer,
  TeamHeader,
  TeamContainer,
  TeamDetails,
  TeamControls,
} from './styles'
import { BackButton } from 'src/components/BackButton'
import { TeamControlButton } from 'src/components/TeamControlButton'
import { PencilSimple, Plus, Trash } from 'phosphor-react'
import { Card } from 'src/components/Card'

const findTeamById = (teams: ITeamData[], id: string | undefined) => {
  return teams.find((team) => team.id === id)
}

export function Team() {
  const currentTheme = useTheme()
  const { id } = useParams()
  const { data, isLoading, error } = useTeams()

  const teams = data?.teams ?? []

  const team = findTeamById(teams, id)

  console.log(team)

  const createdAt = new Date(team?.created_at ?? new Date())

  const formattedDate = format(createdAt, "'Desde:' d 'de' MMMM 'de' yyyy")

  return (
    <Container>
      <BackButton link="/teams" />

      <TeamContainer>
        {isLoading && <span>Carregando...</span>}
        {typeof error === 'string' && <span>Erro: {error}</span>}

        {team ? (
          <TeamDataContainer>
            <TeamHeader>
              <h1>{team.title}</h1>
              <strong>{team.teamOverall}</strong>
            </TeamHeader>

            <TeamDetails>
              <span>Técnico: {team.owner}</span>
              <small>{formattedDate}</small>
            </TeamDetails>

            <TeamControls>
              <TeamControlButton
                key={0}
                icon={<Plus size={28} />}
                text="Adicionar jogador"
              />

              <TeamControlButton
                key={1}
                icon={<PencilSimple size={28} />}
                text="Editar time"
              />

              <TeamControlButton
                key={2}
                icon={<Trash size={28} color={currentTheme['primary-500']} />}
                text="Deletar time"
              />
            </TeamControls>

            <Card
              key={1}
              overall={93}
              position="rw"
              nationality="brazil"
              name="Messi"
              pace={85}
              dribbling={95}
              shooting={92}
              defending={34}
              passing={91}
              physical={65}
            />

            {team.players.map((player) => (
              <PlayerContainer key={player.id}>
                <strong>Player: </strong>

                <span>
                  {player.name}
                  <br />
                  {player.overall}
                  <br />
                </span>
              </PlayerContainer>
            ))}
          </TeamDataContainer>
        ) : null}
      </TeamContainer>
    </Container>
  )
}
