import styled from 'styled-components';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100vh;
`;
/* object-fit: cover; */
export default styled(Container)`
  position: absolute;
  top: 50px;
  left: 354px;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 400;
  font-size: 14px;
  color: #100733;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #9e1111;
  }
`;
