import { useContext } from 'react'
import { IUser, UserContext } from '../contexts/UserContext'
import { addCookie } from '../services/auth/addCookie'
import { USER_ID_STORAGE_KEY } from '../constants'

export const UseUserContext = () => {
  const { user, setUser } = useContext(UserContext)

  function addUser({ id, username, email }: IUser) {
    setUser({ id, username, email })

    addCookie(USER_ID_STORAGE_KEY, id || '')

    return user
  }

  function getUser() {
    return user
  }

  return {
    addUser,
    getUser,
  }
}
