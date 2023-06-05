import api from './api';

export async function signUp(username:string, email: string, password: string) {
  const response = await api.post('/users', { email, password, username });
  return response.data;
}