import CookieConsent from 'react-cookie-consent'
import { COOKIE_CONSENT_STORAGE_KEY } from 'src/constants'

export function CookieNotice() {
  return (
    <CookieConsent
      // debug={true}
      location="bottom"
      cookieName={COOKIE_CONSENT_STORAGE_KEY}
      buttonText="Tudo bem 🍪"
      style={{
        background: '#495BCC',
        color: '#FFF',
        fontSize: '1rem',
      }}
      buttonStyle={{
        background: '#0A1033',
        color: '#FFF',
        fontSize: '1rem',
        borderRadius: '5px',
      }}
      sameSite="strict"
      expires={180} // Number of days before the cookie expires
    >
      Esse site usa cookies para melhorar sua experiência.
    </CookieConsent>
  )
}
