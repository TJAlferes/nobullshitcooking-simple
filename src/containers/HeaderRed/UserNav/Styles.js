import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledUserNav = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  float: right;
  list-style-type: none;

  li {
    margin-left: 9px;
    margin-right: 9px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  font-size: 14px;
  font-weight: 900;
  color: #fff;
  text-decoration: none;
  height: 24px;

  :hover {text-decoration: underline;}
`;