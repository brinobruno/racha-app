import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

import { IPlayerData } from 'src/services/hooks/usePlayersFromTeam'
import { Card } from 'src/components/Card'
import { Container } from './styles'

import 'swiper/css'
import 'swiper/css/pagination'

interface IListViewProps {
  players: IPlayerData[]
}

export function SwiperView({ players }: IListViewProps) {
  return (
    <Container>
      <Swiper
        modules={[A11y, Navigation, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={'auto'}
        rewind
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
