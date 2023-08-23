import { useContext } from 'react'

import { IUser, UserContext } from 'src/contexts/UserContext'
import { addCookie } from 'src/services/auth/addCookie'
import {
  USER_DATA_STORAGE_KEY,
  USER_ID_STORAGE_KEY,
  USER_JWT_AUTH_TOKEN_KEY,
} from 'src/constants'
import { Cookies } from 'typescript-cookie'

export const UseUserContext = () => {
  const { user, setUser } = useContext(UserContext)

  async function addUser({ id, username, email }: IUser) {
    setUser({ id, username, email })

    await addCookie(USER_ID_STORAGE_KEY, id || '')
    await addCookie(USER_DATA_STORAGE_KEY, JSON.stringify(user))

    return user
  }

  async function removeUser() {
    setUser(null)

    Cookies.remove(USER_ID_STORAGE_KEY)
    Cookies.remove(USER_JWT_AUTH_TOKEN_KEY)
  }

  function getUser() {
    const cookieUserData = Cookies.get(USER_DATA_STORAGE_KEY)

    if (cookieUserData) {
      if (typeof cookieUserData === 'string') {
        const parsedCookieUserData = JSON.parse(cookieUserData)
        return parsedCookieUserData
      } else return cookieUserData
    }
  }

  return {
    addUser,
    removeUser,
    getUser,
  }
}
