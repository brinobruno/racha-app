import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/default/DefaultLayout'
import { AuthLayout } from './layouts/auth/AuthLayout'
import { Signin } from './pages/Signin'
import { SignUp } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import { UserAccount } from './pages/UserAccount'
import { Teams } from './pages/Teams'
import { Players } from './pages/Players'

import ProtectedRoute from './services/auth/ProtectedRoute'
import NotFound from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
      </Route>

      <Route path="/" element={<DefaultLayout />}>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute
              authenticationPath="/signin"
              outlet={<Dashboard />}
            />
          }
        />

        <Route
          path="teams/players"
          element={
            <ProtectedRoute authenticationPath="/signin" outlet={<Players />} />
          }
        />

        <Route
          path="teams"
          element={
            <ProtectedRoute authenticationPath="/signin" outlet={<Teams />} />
          }
        />

        <Route
          path="account"
          element={
            <ProtectedRoute
              authenticationPath="/signin"
              outlet={<UserAccount />}
            />
          }
        />
      </Route>
    </Routes>
  )
}
