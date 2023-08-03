import { useState } from 'react'
import Modal from 'react-modal'

import { useThemeContext } from 'src/contexts/ThemeContext'
import { useUserHasTeams } from 'src/services/hooks/useUserHasTeams'
import { modalCustomStyles } from 'src/styles/modalCustomStyles'
import { Container } from './styles'

import PlayerLight from 'src/assets/player-light.svg'
import PlayerDark from 'src/assets/player-dark.svg'

Modal.setAppElement('#root')

export function Dashboard() {
  const [modalIsOpen, setIsOpen] = useState(false)

  const { theme } = useThemeContext()
  const userHasTeams = useUserHasTeams()

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Container>
      <img src={theme === 'light' ? PlayerDark : PlayerLight} alt="" />

      {userHasTeams ? (
        <h1>Você possui times!</h1>
      ) : (
        <h1>Você ainda não possui times ou cartas registradas.</h1>
      )}

      <button onClick={openModal}>Criar time</button>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Criar time"
          style={modalCustomStyles}
        >
          <h2>Criar time</h2>
          <div>Create team form</div>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </Container>
  )
}
