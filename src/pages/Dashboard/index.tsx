import { useThemeContext } from 'src/contexts/ThemeContext'
import { Container } from './styles'

import PlayerLight from 'src/assets/player-light.svg'
import PlayerDark from 'src/assets/player-dark.svg'

export function Dashboard() {
  const { theme } = useThemeContext()

  return (
    <Container>
      <img src={theme === 'light' ? PlayerDark : PlayerLight} alt="" />

      <h1>Você ainda não possui times ou cartas registradas.</h1>

      <button>Criar time</button>
    </Container>
  )
}
