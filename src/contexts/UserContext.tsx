import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export interface IUser {
  id: string
  username: string | undefined
  email: string
}

interface IUserContext {
  user: IUser | null
  setUser: Dispatch<SetStateAction<IUser | null>>
}

interface IUserProviderProps {
  children: ReactNode
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
})

export const UserContextProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
