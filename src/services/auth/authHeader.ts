import { BASE_URL, USER_JWT_AUTH_TOKEN_KEY } from 'src/constants'
import { getCookie } from 'typescript-cookie'

const getTokenFromCookies = () => {
  try {
    const jwtTokenCookie = getCookie(USER_JWT_AUTH_TOKEN_KEY)

    // If the token cookie is found, extract and return it
    if (jwtTokenCookie) return jwtTokenCookie
  } catch (error) {
    throw new Error()
  }
}

export const authHeader = () => {
  const token = getTokenFromCookies()

  return {
    headers: {
      'Access-Control-Allow-Credentials': true,
      withCredentials: true,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': BASE_URL,
      Authorization: 'Bearer ' + token,
    },
  }
}
