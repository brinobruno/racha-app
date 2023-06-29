import { BASE_URL, USER_JWT_AUTH_TOKEN_KEY } from 'src/constants'

const getTokenFromCookies = () => {
  const jwtTokenCookieName = USER_JWT_AUTH_TOKEN_KEY

  // Retrieve all cookies
  const cookies = document.cookie.split(';')

  // Find correct cookie
  const jwtTokenCookie = cookies.find((cookie) => {
    const [name] = cookie.trim().split('=')
    return name === jwtTokenCookieName
  })

  // If the token cookie is found, extract and return it
  if (jwtTokenCookie) {
    const [, token] = jwtTokenCookie.trim().split('=')
    return token
  }

  return console.log('Cookie not found')
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
