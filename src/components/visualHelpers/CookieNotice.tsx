import CookieConsent from 'react-cookie-consent'
import { useTheme } from 'styled-components'

import { COOKIE_CONSENT_STORAGE_KEY } from 'src/constants'

export function CookieNotice() {
  const theme = useTheme()

  return (
    <CookieConsent
      // debug={true}
      location="bottom"
      cookieName={COOKIE_CONSENT_STORAGE_KEY}
      buttonText="Entendi"
      style={{
        background: theme['secondary-300'],
        color: theme['neutral-900'],
        fontSize: '1rem',
      }}
      buttonStyle={{
        background: 'transparent',
        color: theme['neutral-900'],
        fontSize: '1rem',
        borderRadius: '5px',
      }}
      sameSite="strict"
      expires={180} // Number of days before the cookie expires
    >
      🍪 Nosso site usa <strong>cookies</strong> para melhorar sua experiência.
    </CookieConsent>
  )
}
