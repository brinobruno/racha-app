import { SyntheticEvent, useState } from 'react'
import { signInUser } from '../services/signInUser'

export default function Signin() {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const response = await signInUser({
      email: emailInput,
      password: passwordInput,
    })

    console.log('Success:', response.message)
    localStorage.setItem('sessionId', response.sessionId)
    window.location.href = '/'
  }

  return (
    <div>
      Sign in
      <form onSubmit={handleSubmit}>
        <input
          required
          id="email"
          name="email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <input
          required
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}
