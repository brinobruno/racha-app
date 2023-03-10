import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/default/DefaultLayout'
import { AuthLayout } from './layouts/auth/AuthLayout'
import { Signin } from './pages/Signin'
import { SignUp } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import { USER_SESSION_STORAGE_KEY } from './Constants'

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

const sessionId = localStorage.getItem(USER_SESSION_STORAGE_KEY)

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  isAuthenticated: !!sessionId,
  authenticationPath: '/signin',
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
      </Route>

      <Route path="/" element={<DefaultLayout />}>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Dashboard />}
            />
          }
        />
      </Route>
    </Routes>
  )
}
