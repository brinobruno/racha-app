import { setCookie } from 'typescript-cookie'

export async function addCookie(key: string, value: string) {
  return setCookie(key, value, {
    expires: 90,
    path: '',
    sameSite: 'Strict',
  })
}
