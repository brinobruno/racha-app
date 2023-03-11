import { Navigate } from 'react-router-dom'
import Cookie from 'js-cookie'

import { USER_SESSION_STORAGE_KEY } from '../../constants'

export type ProtectedRouteProps = {
  isAuthenticated: boolean
  authenticationPath: string
  // eslint-disable-next-line no-undef
  outlet: JSX.Element
}

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />
  }
}

const sessionId = Cookie.get(USER_SESSION_STORAGE_KEY)

export const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  isAuthenticated: !!sessionId,
  authenticationPath: '/signin',
}
