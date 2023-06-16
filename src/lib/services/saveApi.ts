import { SaveCategories } from '../utils/protocols/saves'
import api, { authorization } from './api'

export async function getSaveCategories(
  token: string,
): Promise<SaveCategories> {
  const response = await api.get('/saves/categories', authorization(token))
  return response.data
}
