import useCookies from './useCookies'

export default function useToken() {
  const { getByKey } = useCookies()

  return getByKey('token')
}
