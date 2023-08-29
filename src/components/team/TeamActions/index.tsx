import { useTheme } from 'styled-components'
import { PencilSimple, Plus, Trash } from 'phosphor-react'

import { TeamControlButton } from '../TeamControlButton'
import { Container } from './styles'

export function TeamActions() {
  const currentTheme = useTheme()

  return (
    <Container>
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
    </Container>
  )
}
