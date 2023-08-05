import { ReactNode } from 'react'
import { X } from 'phosphor-react'
import Modal from 'react-modal'
import { modalCustomStyles } from 'src/styles/modalCustomStyles'
import { HeaderContainer } from './styles'

interface IGlobalModalProps {
  isOpen: boolean
  onRequestClose: () => void
  contentLabel: string
  title: string
  children: ReactNode
}

Modal.setAppElement('#root')

export function GlobalModal({
  isOpen,
  onRequestClose,
  contentLabel,
  title,
  children,
}: IGlobalModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={modalCustomStyles}
      closeTimeoutMS={200}
    >
      <HeaderContainer>
        <X onClick={onRequestClose} alt="fechar" />
      </HeaderContainer>

      <h6>{title}</h6>

      {children}
    </Modal>
  )
}
