import { Strategy, Cards, List } from 'phosphor-react'

import { AvailableViewType } from 'src/pages/User/Team'
import { Container } from './styles'

interface TeamViewsProps {
  selectedView: AvailableViewType
  teamHasPlayers: boolean
  setSelectedView: (view: AvailableViewType) => void
}

export function ViewDisplays({
  selectedView,
  teamHasPlayers,
  setSelectedView,
}: TeamViewsProps) {
  return (
    <>
      {teamHasPlayers && (
        <Container>
          <span
            onClick={() => setSelectedView('pitch')}
            className={selectedView === 'pitch' ? 'active' : ''}
          >
            <Strategy size={32} />
          </span>
          <span
            onClick={() => setSelectedView('swiper')}
            className={selectedView === 'swiper' ? 'active' : ''}
          >
            <Cards size={32} />
          </span>
          <span
            onClick={() => setSelectedView('list')}
            className={selectedView === 'list' ? 'active' : ''}
          >
            <List size={32} />
          </span>
        </Container>
      )}
    </>
  )
}
