import { BASE_URL, headers } from '../Constants'

interface ISignInRequest {
  email: string | undefined
  password: string | undefined
}

export async function signInUser({ email, password }: ISignInRequest) {
  const bodyRequest = JSON.stringify({ email, password })

  try {
    return await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers,
      body: bodyRequest,
    }).then((response) => response.json())
  } catch (error: unknown) {
    console.log(error)
    throw new Error(error as string)
  }
}
