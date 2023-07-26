import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useTheme } from 'styled-components'
import { PencilSimple, Plus, Trash } from 'phosphor-react'

import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import { BackButton } from 'src/components/BackButton'
import { TeamControlButton } from 'src/components/TeamControlButton'
import { Card } from 'src/components/Card'
import {
  Container,
  TeamDataContainer,
  TeamHeader,
  TeamContainer,
  TeamDetails,
  TeamControls,
  TeamPlayersGrid,
  NoPlayersNotice,
} from './styles'

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

            {team.players.length === 0 ? (
              <NoPlayersNotice>
                <span>
                  O Racha desanimou? Essa equipe ainda não tem jogadores
                  registrados.
                </span>
              </NoPlayersNotice>
            ) : null}

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

            <TeamPlayersGrid>
              {team.players.length > 0
                ? team.players.map(
                    ({
                      id,
                      overall,
                      position,
                      nationality,
                      known_as: knownAs,
                      pace,
                      dribbling,
                      shooting,
                      defending,
                      passing,
                      physical,
                    }) => (
                      <div key={id}>
                        <Card
                          overall={overall}
                          position={position}
                          nationality={nationality}
                          name={knownAs}
                          pace={pace}
                          dribbling={dribbling}
                          shooting={shooting}
                          defending={defending}
                          passing={passing}
                          physical={physical}
                        />
                      </div>
                    ),
                  )
                : null}
            </TeamPlayersGrid>
          </TeamDataContainer>
        ) : null}
      </TeamContainer>
    </Container>
  )
}
