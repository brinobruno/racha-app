import { useContext } from 'react'
import { IUser, UserContext } from '../contexts/UserContext'

export const UseUserContext = () => {
  const { user, setUser } = useContext(UserContext)

  function addUser({ id, username, email }: IUser) {
    setUser({ id, username, email })

    return user
  }

  function getUser() {
    console.log(user)
  }

  return {
    addUser,
    getUser,
  }
}
