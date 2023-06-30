import { setCookie } from 'typescript-cookie'

export async function addCookie(key: string, value: string) {
  return setCookie(key, value, {
    expires: 30, // Expires after 30 days
    path: '',
    sameSite: 'Strict',
    // secure: true,
  })
}
