import { useContext } from 'react'
import { IUser, UserContext } from '../contexts/UserContext'
import { addCookie } from '../services/auth/addCookie'

export const UseUserContext = () => {
  const { user, setUser } = useContext(UserContext)

  function addUser({ id, username, email }: IUser) {
    setUser({ id, username, email })

    addCookie('userid', id || '')

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
