import { StyledNavLink, Nav } from './Navigation.styled';
import { IoIosFlower } from 'react-icons/io';
/* import BottomNavigation from '@mui/material/BottomNavigation'; */
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';
import { getSelectorIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';

import BottomNavigation from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        value="recents"
        icon={
          <StyledNavLink to="/">
            <HomeIcon />
          </StyledNavLink>
        }
      />
      {isLoggedIn && (
        <BottomNavigationAction
          value="recents"
          icon={
            <StyledNavLink to="/contacts">
              <ContactPhoneSharpIcon />
            </StyledNavLink>
          }
        />
      )}
    </BottomNavigation>
  );
}
/* Home<ChangeColor>
        <IoIosFlower
          className="App-logo"
          style={{
            width: 30,
            height: 30,
          }}
        /> */
