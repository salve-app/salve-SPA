import { getGeocoderByCoordinates } from '@/lib/services/geolocationApi'
import { LocationCoordinates } from '../protocols/geolocation'
import { formatGeocoderResultToAddress } from './formatAddress'

export default async function getAddressByCoordinates(
  coordinates: LocationCoordinates,
) {
  const coordinatesString = `${coordinates.position.lat},${coordinates.position.lng}`

  const geocoderResult = await getGeocoderByCoordinates(coordinatesString)

  const address = formatGeocoderResultToAddress(geocoderResult)

  return address;
}
