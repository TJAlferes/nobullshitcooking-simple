import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSiteNav = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  float: left;
  list-style-type: none;
  height: 25px;
  li {
    margin-left: 10px;
    margin-right: 10px;
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