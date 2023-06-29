import { Navigate } from 'react-router-dom'
import { getCookie } from 'typescript-cookie'

import { USER_JWT_AUTH_TOKEN_KEY } from 'src/constants'

export type ProtectedRouteProps = {
  authenticationPath: string
  // eslint-disable-next-line no-undef
  outlet: JSX.Element
}

export default function ProtectedRoute({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  const isAuthenticated = !!getCookie(USER_JWT_AUTH_TOKEN_KEY)

  if (isAuthenticated) {
    return outlet
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />
  }
}
