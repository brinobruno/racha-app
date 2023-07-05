import { Link } from 'react-router-dom'

import AppStoreBadge from 'src/assets/social/app-store-badge.svg'
import GooglePlayBadge from 'src/assets/social/google-play-badge.png'
import {
  Container,
  DownloadAppBadge,
  DownloadAppContainer,
  WidthWrapper,
} from './styles'

export function Footer() {
  return (
    <Container>
      <WidthWrapper>
        <div>
          <Link to="/">
            <img src="" alt="" loading="lazy" />
            Some description
          </Link>
        </div>

        <DownloadAppContainer>
          <span>Get the app.</span>

          <Link to="/">
            <DownloadAppBadge src={AppStoreBadge} alt="" loading="lazy" />
          </Link>

          <Link to="/">
            <DownloadAppBadge src={GooglePlayBadge} alt="" loading="lazy" />
          </Link>
        </DownloadAppContainer>
      </WidthWrapper>
    </Container>
  )
}
