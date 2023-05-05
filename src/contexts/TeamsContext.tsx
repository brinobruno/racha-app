import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export interface IPlayer {
  id: string
  team_id: string
  name: string
  known_as: string
  position: string
  nationality: string
  overall: number
  pace: number
  shooting: number
  passing: number
  dribbling: number
  defending: number
  physical: number
}

export interface ITeam {
  id: string
  user_id: string
  title: string
  owner: string
  players: IPlayer[]
}

interface ITeams {
  teams: ITeam[]
}

interface ITeamsContext {
  teams: ITeams | null
  setTeams: Dispatch<SetStateAction<ITeams | null>>
}

interface ITeamsProviderProps {
  children: ReactNode
}

export const TeamsContext = createContext<ITeamsContext>({
  teams: null,
  setTeams: () => {},
})

export const TeamsContextProvider = ({ children }: ITeamsProviderProps) => {
  const [teams, setTeams] = useState<ITeams | null>(null)

  return (
    <TeamsContext.Provider value={{ teams, setTeams }}>
      {children}
    </TeamsContext.Provider>
  )
}
