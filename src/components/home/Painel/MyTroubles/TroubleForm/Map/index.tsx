import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useEffect, useMemo, useState } from 'react'

export default function Map() {
  const [coords, setCoords] = useState({
    name: 'Current position',
    position: {
      lat: 24.914161699999998,
      lng: 67.082216,
    },
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const currentCoords = {
          ...coords,
          position: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          },
        }
        setCoords(currentCoords)
      },
      (e) => console.log(e),
      {
        enableHighAccuracy: true,
      },
    )
  }, [])

  const onMarkerDragEnd = (coord) => {
    console.log(coord)
    const { latLng } = coord
    const lat = latLng.lat()
    const lng = latLng.lng()

    setCoords({ ...coords, position: { lat, lng } })
  }
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap
      zoom={15}
      center={coords.position}
      mapContainerClassName="w-full h-[400px] rounded-lg"
    >
      <Marker
        position={coords.position}
        title={'Arraste para o local correto, caso precise.'}
        icon={'/images/map-pin.png'}
        onPositionChanged={(t, map, coord) => {
          onMarkerDragEnd(coord)
        }}
        draggable
      />
    </GoogleMap>
  )
}
