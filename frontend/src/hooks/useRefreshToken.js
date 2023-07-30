import axios from '../api/axios'
import useAuth from './useAuth'

const REFRESH_URL = 'auth/jwt/refresh'
const USER_URL = 'auth/users/me'

const useRefreshToken = () => {
  const { setAuth } = useAuth()
  const refreshToken = localStorage.getItem('refresh')
  const refConfig = {
    headers: { 'Content-Type': 'application/json' },
  }
  const body = { refresh: refreshToken }

  const refresh = async () => {
    try {
      const refResponse = await axios.post(REFRESH_URL, body, refConfig)
      const access = refResponse.data.access
      const userConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${access}`,
          Accept: 'application/json',
        },
      }
      const userResponse = await axios.get(USER_URL, userConfig)
      const user = userResponse?.data
      await setAuth({
        access: access,
        user: user,
      })
      localStorage.setItem('refresh', refResponse.data.refresh)
    } catch (err) {
      console.error(err)
    }
  }
  return refresh
}

export default useRefreshToken
