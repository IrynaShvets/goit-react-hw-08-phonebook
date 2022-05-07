import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
/* &:hover {
    color: #fff;
  } */
export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  padding: 0 40px;
  font-weight: 700;
  font-size: 30px;
  color: #3e1268;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #b43bc4;
    border-bottom: 1px solid #b43bc4;
  }
`;
/* text-shadow: 0 2px 1px #264d5f, 0 5px 4px #264d5f, 0 11px 8px #264d5f; */
export const Nav = styled.nav`
  display: flex;
`;
/* align-items: center;
  justify-content: flex-start; */
