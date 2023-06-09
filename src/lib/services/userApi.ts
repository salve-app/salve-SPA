import api, { authorization } from './api'

export async function createUser(data: UserData) {
  const response = await api.post('/users/sign-up', data)
  return response.data
}

export async function createProfile(data: ProfileData, token: string) {
  const response = await api.post(
    '/users/sign-up/profile',
    data,
    authorization(token),
  )
  return response.data
}

interface UserData {
  username: string
  email: string
  password: string
}

interface ProfileData {
  fullName: string
  cpf: string
  birthday: Date
  phoneNumber: string
  gender: string
}
