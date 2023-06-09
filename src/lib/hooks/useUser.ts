import useToken from './useToken'
import decode from 'jwt-decode'

export default function useUser() {
  const token = useToken()

  const user = token && decode(token)

  return user
}
