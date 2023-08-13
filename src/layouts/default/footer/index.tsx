import { useTheme } from 'styled-components'
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
  LowerFooter,
  WidthWrapper,
} from './styles'
import { Code, LinkedinLogo } from 'phosphor-react'

export function Footer() {
  const { theme } = useThemeContext()
  const currentTheme = useTheme()

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

          <span>
            Revolucione o seu Racha, gerencie equipes com seus amigos agora.
          </span>

          <nav title="Navegação rodapé" aria-label="Navegação rodapé">
            <Link to="">Overview</Link>
            <Link to="">Features</Link>
            <Link to="">FAQ</Link>
            <Link to="">Help</Link>
            <Link to="">Privacy</Link>
          </nav>
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

      <WidthWrapper>
        <hr />
      </WidthWrapper>

      <LowerFooter>
        <span>&copy; 2023 Racha App. Todos os direitos reservados.</span>

        <div>
          <Link
            to="https://github.com/brinobruno"
            target="_blank"
            rel="noreferrer"
          >
            <Code size={28} color={currentTheme['neutral-400']} />
          </Link>

          <Link
            to="https://www.linkedin.com/in/brunociao/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={28} color={currentTheme['neutral-400']} />
          </Link>
        </div>
      </LowerFooter>
    </Container>
  )
}
