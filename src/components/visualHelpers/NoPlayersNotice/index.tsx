import { Container } from './styles'
import { SmileySad } from 'phosphor-react'

interface INoPlayersNoticeProps {
  teamHasPlayers: boolean
}

export function NoPlayersNotice({ teamHasPlayers }: INoPlayersNoticeProps) {
  return (
    <>
      {!teamHasPlayers && (
        <Container>
          <span>
            O Racha desanimou? Essa equipe ainda não tem jogadores registrados.
          </span>
          <SmileySad size={28} />
        </Container>
      )}
    </>
  )
}
