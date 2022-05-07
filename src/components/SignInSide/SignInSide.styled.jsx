import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  color: #100733;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #9e1111;
  }
`;
