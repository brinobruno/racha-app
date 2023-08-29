import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

import { ITeamData, useTeams } from 'src/services/hooks/useTeams'
import { BackButton } from 'src/components/visualHelpers/BackButton'
import { NoPlayersNotice } from 'src/components/visualHelpers/NoPlayersNotice'
import { ViewDisplays } from 'src/components/team/TeamViews/ViewDisplays'
import { TeamPlayerViews } from 'src/components/team/TeamViews/TeamPlayerViews'
import { TeamActions } from 'src/components/team/TeamActions'
import {
  Container,
  TeamDataContainer,
  TeamHeader,
  TeamContainer,
  TeamDetails,
  TeamControls,
} from './styles'

const findTeamById = (teams: ITeamData[], id: string | undefined) => {
  return teams.find((team) => team.id === id)
}

export type AvailableViewType = 'list' | 'swiper' | 'pitch'

export function Team() {
  const [selectedView, setSelectedView] = useState<AvailableViewType>('pitch')

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

            <NoPlayersNotice teamHasPlayers={teamHasPlayers} />

            <TeamControls>
              <TeamActions />

              <ViewDisplays
                selectedView={selectedView}
                teamHasPlayers={teamHasPlayers}
                setSelectedView={setSelectedView}
              />
            </TeamControls>

            <TeamPlayerViews
              selectedView={selectedView}
              teamHasPlayers={teamHasPlayers}
              teamPlayers={team.players}
            />
          </TeamDataContainer>
        ) : null}
      </TeamContainer>
    </Container>
  )
}
