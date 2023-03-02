import { SyntheticEvent, useState } from 'react'

interface ISignInRequest {
  email: string | undefined
  password: string | undefined
}

async function signInUser({ email, password }: ISignInRequest) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  }

  const bodyRequest = JSON.stringify({ email, password })

  return await fetch('http://localhost:3333/users/login', {
    method: 'POST',
    headers,
    body: bodyRequest,
  }).then((data) => data.json())
}

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
