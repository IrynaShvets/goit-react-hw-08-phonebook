import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
/* import { IoIosFlower } from 'react-icons/io'; */
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { Header } from './AppBar.styled';
import Loader from '../Loader/Loader';
import { getSelectorIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);

  return (
    <>
      <Header>
        {/* <ChangeColor>
           <IoIosFlower
            className="App-logo"
            style={{
              width: 30,
              height: 30,
            }}
          /> 
        </ChangeColor> */}
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {/*  <AuthNav />
        <UserMenu /> */}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
