const BASE_URL = import.meta.env.VITE_RACHA_API_ENDPOINT

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': BASE_URL,
}

export { BASE_URL, headers }
