import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCookie } from 'typescript-cookie'

import { USER_SESSION_STORAGE_KEY } from '../constants'

export function useSession() {
  const navigate = useNavigate()

  useEffect(() => {
    const sessionId = getCookie(USER_SESSION_STORAGE_KEY)

    if (sessionId) {
      navigate('/dashboard')
    }
  }, [navigate])
}
