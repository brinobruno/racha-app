import { CaretLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export function BackButton(props: { link: string }) {
  return (
    <Container>
      <Link to={props.link}>
        <CaretLeft size={28} />
        <span>Voltar</span>
      </Link>
    </Container>
  )
}
