import { useContext } from 'react'

import { IUser, UserContext } from 'src/contexts/UserContext'
import { addCookie } from 'src/services/auth/addCookie'
import { USER_DATA_STORAGE_KEY, USER_ID_STORAGE_KEY } from 'src/constants'

export const UseUserContext = () => {
  const { user, setUser } = useContext(UserContext)

  async function addUser({ id, username, email }: IUser) {
    setUser({ id, username, email })

    await addCookie(USER_ID_STORAGE_KEY, id || '')
    await addCookie(USER_DATA_STORAGE_KEY, JSON.stringify(user))

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
