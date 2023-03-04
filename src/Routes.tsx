import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { DefaultLayout } from './layouts/default/DefaultLayout'
import { AuthLayout } from './layouts/auth/AuthLayout'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Route>

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
