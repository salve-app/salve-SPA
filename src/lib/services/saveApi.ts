import { LocationCoordinates } from '../utils/protocols/geolocation'
import { SaveForm } from '../utils/protocols/inputs'
import { SaveCategories } from '../utils/protocols/saves'
import api, { authorization } from './api'

export async function getSaveCategories(
  token: string,
): Promise<SaveCategories> {
  const response = await api.get('/saves/categories', authorization(token))
  return response.data
}

export async function createSave(save: SaveForm, token: string) {
  const response = await api.post('/saves', { ...save }, authorization(token))
  return response.data
}

export async function getRequestedSaves(token: string) {
  const response = await api.get('/saves/requested', authorization(token))
  return response.data
}

export async function getOfferingSaves(token: string) {
  const response = await api.get('/saves/offering', authorization(token))
  return response.data
}

export async function getSavesByCurrentLocation(
  currentLocation: LocationCoordinates,
  range: number,
  token: string,
) {
  const { lat, lng } = currentLocation.position

  const queryLocation = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lng.toString(),
    range: range.toString(),
  }).toString()

  const response = await api.get(
    `/saves?${queryLocation}`,
    authorization(token),
  )

  return response.data
}
