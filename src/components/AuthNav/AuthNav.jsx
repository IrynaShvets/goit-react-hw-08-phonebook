import { StyledNavLink, Nav } from './AuthNav.styled';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import * as React from 'react';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function AuthNav() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label={
          <StyledNavLink to="/register">
            <VpnKeyIcon />
          </StyledNavLink>
        }
        value="recents"
      />
      <BottomNavigationAction
        label={
          <StyledNavLink to="/login">
            <LockOpenIcon />
          </StyledNavLink>
        }
        value="recents"
      />
    </BottomNavigation>
  );
}
/*  sx={{ width: 1000 }} */
