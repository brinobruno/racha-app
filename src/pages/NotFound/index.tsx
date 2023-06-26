import { Container, IllustrationContainer, Illustration } from './styles'
import NotFoundImg from 'src/assets/not-found.svg'

export default function NotFound() {
  return (
    <Container>
      <IllustrationContainer>
        <Illustration src={NotFoundImg} alt="" />
      </IllustrationContainer>

      <h1>Oops! You seem to be lost.</h1>
    </Container>
  )
}
