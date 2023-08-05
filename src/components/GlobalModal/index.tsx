import { ReactNode } from 'react'
import { X } from 'phosphor-react'
import Modal from 'react-modal'
import { modalCustomStyles } from 'src/styles/modalCustomStyles'

interface IGlobalModalProps {
  isOpen: boolean
  onRequestClose: () => void
  contentLabel: string
  children: ReactNode
}

Modal.setAppElement('#root')

export function GlobalModal({
  isOpen,
  onRequestClose,
  contentLabel,
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
      <header>
        <X onClick={onRequestClose} />
      </header>

      {children}
    </Modal>
  )
}
