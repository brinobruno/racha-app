import { useContext } from 'react'
import { IUser, UserContext } from 'src/contexts/UserContext'
import { addCookie } from 'src/services/auth/addCookie'
import { USER_ID_STORAGE_KEY } from 'src/constants'

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
