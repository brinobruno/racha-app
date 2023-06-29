import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCookie } from 'typescript-cookie'

import { USER_JWT_AUTH_TOKEN_KEY } from 'src/constants'

export function useSession() {
  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = getCookie(USER_JWT_AUTH_TOKEN_KEY)

    if (jwtToken) {
      navigate('/dashboard')
    }
  })
}
