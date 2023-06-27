import { Link } from 'react-router-dom'
import {
  Container,
  IllustrationContainer,
  Illustration,
  HelpContainer,
} from './styles'
import NotFoundImg from 'src/assets/not-found.svg'

export default function NotFound() {
  return (
    <Container>
      <IllustrationContainer>
        <Illustration src={NotFoundImg} alt="" />
      </IllustrationContainer>

      <HelpContainer>
        <h1>Oops! You seem to be lost.</h1>
        <span>Some text...</span>

        <button>
          <Link to="/dashboard">Go back...</Link>
        </button>
      </HelpContainer>
    </Container>
  )
}
