const BASE_URL = import.meta.env.VITE_RACHA_API_ENDPOINT

const USER_JWT_AUTH_TOKEN_KEY = '@racha-app:auth-token-1.0.0'

const USER_SESSION_STORAGE_KEY = '@racha-app:session-id-1.0.0'

const USER_ID_STORAGE_KEY = '@racha-app:user-id-1.0.0'

const THEME_PREFERENCE_STORAGE_KEY = '@racha-app:theme-1.0.0'

const COOKIE_CONSENT_STORAGE_KEY = '@racha-app:cookie-consent-1.0.0'

const headers = {
  'Access-Control-Allow-Credentials': true,
  withCredentials: true,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': BASE_URL,
}

export {
  BASE_URL,
  headers,
  USER_JWT_AUTH_TOKEN_KEY,
  USER_SESSION_STORAGE_KEY,
  USER_ID_STORAGE_KEY,
  THEME_PREFERENCE_STORAGE_KEY,
  COOKIE_CONSENT_STORAGE_KEY,
}
