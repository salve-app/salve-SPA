import api from './api'

export async function signIn(login: string, password: string) {
  const response = await api.post('/auth/sign-in', { login, password })
  return response.data
}
