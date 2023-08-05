import { useState } from 'react'
import { useThemeContext } from 'src/contexts/ThemeContext'
import { useUserHasTeams } from 'src/services/hooks/useUserHasTeams'
import { Container } from './styles'

import PlayerLight from 'src/assets/player-light.svg'
import PlayerDark from 'src/assets/player-dark.svg'
import { GlobalModal } from 'src/components/GlobalModal'

export function Dashboard() {
  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false)
  const { theme } = useThemeContext()
  const userHasTeams = useUserHasTeams()

  function handleOpenCreateTeamModal() {
    setIsCreateTeamModalOpen(true)
  }

  function handleCloseCreateTeamModal() {
    setIsCreateTeamModalOpen(false)
  }

  return (
    <Container>
      <img src={theme === 'light' ? PlayerDark : PlayerLight} alt="" />

      {userHasTeams ? (
        <h1>Você possui times!</h1>
      ) : (
        <h1>Você ainda não possui times ou cartas registradas.</h1>
      )}

      <button onClick={handleOpenCreateTeamModal}>Criar time</button>

      <div>
        <GlobalModal
          isOpen={isCreateTeamModalOpen}
          onRequestClose={handleCloseCreateTeamModal}
          contentLabel="Criar time"
        >
          <h2>Criar time</h2>
          <div>Create team form</div>
          <button onClick={handleCloseCreateTeamModal}>Close</button>
        </GlobalModal>
      </div>
    </Container>
  )
}
