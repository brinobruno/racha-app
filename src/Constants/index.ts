const BASE_URL = import.meta.env.VITE_RACHA_API_ENDPOINT

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': BASE_URL,
}

const USER_SESSION_STORAGE_KEY = '@racha-app:session-id-1.0.0'

const THEME_PREFERENCE_STORAGE_KEY = '@racha-app:theme-1.0.0'

export {
  BASE_URL,
  headers,
  USER_SESSION_STORAGE_KEY,
  THEME_PREFERENCE_STORAGE_KEY,
}
