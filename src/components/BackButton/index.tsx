import { CaretLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export function BackButton(props: { link: string }) {
  return (
    <Container>
      <CaretLeft size={28} />
      <Link to={props.link}>Voltar</Link>
    </Container>
  )
}
