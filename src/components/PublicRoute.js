import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getSelectorIsLoggedIn } from '../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  navigateTo = '/',
}) {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return <>{shouldNavigate ? <Navigate to={navigateTo} /> : children}</>;
}
