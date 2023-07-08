import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Visitor/Home'
import { DefaultLayout } from './layouts/default/DefaultLayout'
import { AuthLayout } from './layouts/auth/AuthLayout'
import { Signin } from './pages/Visitor/Signin'
import { SignUp } from './pages/Visitor/Signup'
import { Dashboard } from './pages/User/Dashboard'
import { UserAccount } from './pages/User/UserAccount'
import { Teams } from './pages/User/Teams'
import { Team } from './pages/User/Team'
import { Players } from './pages/User/Players'

import ProtectedRoute from './services/auth/ProtectedRoute'
import NotFound from './pages/Visitor/NotFound'

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
          path="teams/team/:id"
          element={
            <ProtectedRoute authenticationPath="/signin" outlet={<Team />} />
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
