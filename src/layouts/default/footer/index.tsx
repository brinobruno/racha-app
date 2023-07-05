import { Link } from 'react-router-dom'

import LogoBlack from 'src/assets/logo-black.svg'
import LogoWhite from 'src/assets/logo-white.svg'
import AppStoreBadge from 'src/assets/social/app-store-badge.svg'
import GooglePlayBadge from 'src/assets/social/google-play-badge.png'

import { useThemeContext } from 'src/contexts/ThemeContext'
import {
  Container,
  DownloadAppBadge,
  DownloadAppContainer,
  FooterInfoContainer,
  WidthWrapper,
} from './styles'

export function Footer() {
  const { theme } = useThemeContext()

  return (
    <Container>
      <WidthWrapper>
        <FooterInfoContainer>
          <Link to="/">
            <img
              src={theme === 'light' ? LogoBlack : LogoWhite}
              alt=""
              loading="lazy"
            />
          </Link>
          Some description
        </FooterInfoContainer>

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
