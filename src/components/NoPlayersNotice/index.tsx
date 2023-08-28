import { Container } from './styles'
import { SmileySad } from 'phosphor-react'

export function NoPlayersNotice() {
  return (
    <Container>
      <span>
        O Racha desanimou? Essa equipe ainda não tem jogadores registrados.
      </span>
      <SmileySad size={28} />
    </Container>
  )
}
