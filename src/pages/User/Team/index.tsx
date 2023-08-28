import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useTheme } from 'styled-components'
import { PencilSimple, Plus, SmileySad, Trash } from 'phosphor-react'

import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import { ListView } from 'src/components/TeamViews/ListView'
import { SwiperView } from 'src/components/TeamViews/SwiperView'
import { PitchView } from 'src/components/TeamViews/PitchView'
import { BackButton } from 'src/components/BackButton'
import { TeamControlButton } from 'src/components/TeamControlButton'
import {
  Container,
  TeamDataContainer,
  TeamHeader,
  TeamContainer,
  TeamDetails,
  TeamControls,
  NoPlayersNotice,
  TeamActions,
  TeamViews,
} from './styles'

const findTeamById = (teams: ITeamData[], id: string | undefined) => {
  return teams.find((team) => team.id === id)
}

type AvailableViewType = 'list' | 'swiper' | 'pitch'

export function Team() {
  const currentTheme = useTheme()

  const [selectedView, setSelectedView] = useState<AvailableViewType>('list')

  const { id } = useParams()
  const { data, isLoading, error } = useTeams()

  const teams = data?.teams ?? []
  const team = findTeamById(teams, id)

  // Checks if team.players.length possible undefined first
  const teamHasPlayers = (team?.players?.length ?? 0) > 0

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

            {!teamHasPlayers ? (
              <NoPlayersNotice>
                <span>
                  O Racha desanimou? Essa equipe ainda não tem jogadores
                  registrados.
                </span>
                <SmileySad size={28} />
              </NoPlayersNotice>
            ) : null}

            <TeamControls>
              <TeamActions>
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
              </TeamActions>

              {teamHasPlayers ? (
                <TeamViews>
                  <button onClick={() => setSelectedView('list')}>
                    List View
                  </button>
                  <button onClick={() => setSelectedView('swiper')}>
                    Swiper View
                  </button>
                  <button onClick={() => setSelectedView('pitch')}>
                    Pitch View
                  </button>
                </TeamViews>
              ) : null}
            </TeamControls>

            {teamHasPlayers ? (
              <>
                {selectedView === 'swiper' && (
                  <SwiperView players={team.players} />
                )}

                {selectedView === 'pitch' && (
                  <PitchView players={team.players} />
                )}

                {selectedView === 'list' && <ListView players={team.players} />}
              </>
            ) : null}
          </TeamDataContainer>
        ) : null}
      </TeamContainer>
    </Container>
  )
}
