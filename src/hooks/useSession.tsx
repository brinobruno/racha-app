import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { USER_SESSION_STORAGE_KEY } from '../Constants'

export function useSession() {
  const navigate = useNavigate()

  useEffect(() => {
    const sessionId = localStorage.getItem(USER_SESSION_STORAGE_KEY)

    if (sessionId) {
      navigate('/dashboard')
    }
  }, [navigate])
}
