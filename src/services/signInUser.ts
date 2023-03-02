interface ISignInRequest {
  email: string | undefined
  password: string | undefined
}

export async function signInUser({ email, password }: ISignInRequest) {
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
