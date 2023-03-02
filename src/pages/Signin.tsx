import { SyntheticEvent, useState } from 'react'
import { signInUser } from '../services/signInUser'

export default function Signin() {
  const [email, setEmailInput] = useState('')
  const [password, setPasswordInput] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    try {
      const response = await signInUser({
        email,
        password,
      })

      console.log(response)

      if (response.sessionId) {
        console.log('Success:', response.message)

        localStorage.setItem('sessionId', response.sessionId)
        window.location.href = '/'
      } else if (response.status === 401) {
        console.log('Email or password is incorrect')
      } else if (response.status === 422) {
        console.log('User does not exist')
      }
    } catch (error: unknown) {
      console.log(error)
      throw new Error(error as string)
    }
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
