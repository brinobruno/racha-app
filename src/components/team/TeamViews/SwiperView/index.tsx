import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { Card } from 'src/components/team/Card'
import { Container } from './styles'

import 'swiper/swiper-bundle.css'

interface IListViewProps {
  players: IPlayerData[]
}

export function SwiperView({ players }: IListViewProps) {
  return (
    <Container>
      <Swiper
        className="team-swiper-view"
        modules={[A11y, Navigation, Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={'15%'}
        centeredSlides
        // centeredSlidesBounds
        rewind
        scrollbar
        grabCursor
      >
        {players.map((player) => (
          <SwiperSlide key={player.id}>
            <Card
              overall={player.overall}
              position={player.position}
              nationality={player.nationality}
              name={player.known_as}
              pace={player.pace}
              dribbling={player.dribbling}
              shooting={player.shooting}
              defending={player.defending}
              passing={player.passing}
              physical={player.physical}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
