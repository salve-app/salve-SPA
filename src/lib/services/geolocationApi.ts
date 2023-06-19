import api from './api'

export async function getGeocoderByCoordinates(latLng: string) {
  const queryString = new URLSearchParams({
    region: 'br',
    language: 'pt-BR',
    location_type: 'ROOFTOP',
    latlng: latLng,
    result_type: 'street_address',
    key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
  }).toString()

  const response = (
    await api.get(
      `https://maps.googleapis.com/maps/api/geocode/json?${queryString}`,
    )
  ).data as google.maps.GeocoderResponse

  return response.results[0];
}
