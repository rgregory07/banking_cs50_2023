import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks (future use)/useAuth'

const RequireAuth = () => {
  const { auth } = useAuth()
  const location = useLocation()

  return auth?.access ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequireAuth
