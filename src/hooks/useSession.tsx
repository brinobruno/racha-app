import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookie from 'js-cookie'

import { USER_SESSION_STORAGE_KEY } from '../constants'

export function useSession() {
  const navigate = useNavigate()

  useEffect(() => {
    const sessionId = Cookie.get(USER_SESSION_STORAGE_KEY)

    if (sessionId) {
      navigate('/dashboard')
    }
  }, [navigate])
}
