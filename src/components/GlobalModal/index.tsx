import { ReactNode } from 'react'
import { useTheme } from 'styled-components'
import { X } from 'phosphor-react'
import Modal from 'react-modal'

import { modalCustomStyles } from 'src/styles/modalCustomStyles'
import { Container, HeaderContainer } from './styles'

interface IGlobalModalProps {
  isOpen: boolean
  contentLabel: string
  title: string
  children: ReactNode
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export function GlobalModal({
  isOpen,
  contentLabel,
  title,
  children,
  onRequestClose,
}: IGlobalModalProps) {
  const theme = useTheme()

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        overlay: modalCustomStyles.overlay,
        content: {
          ...modalCustomStyles.content,
          background: theme['neutral-800'],
          border: `1px solid ${theme['neutral-800']}`,
          color: theme['neutral-100'],
        },
      }}
      closeTimeoutMS={200}
    >
      <Container>
        <HeaderContainer>
          <X
            onClick={onRequestClose}
            alt="fechar"
            aria-label="fechar"
            size={24}
          />
        </HeaderContainer>

        <h6>{title}</h6>

        {children}
      </Container>
    </Modal>
  )
}
