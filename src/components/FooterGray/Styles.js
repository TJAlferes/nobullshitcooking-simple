import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledFooterGray = styled.footer`
  width: 100%;
  min-width: 1280px;
  height: 92px;
  background-color: #666;
  font-family: 'Arial', sans-serif;

  ul {
    display: table;
    margin: 35px auto 0 auto;
    list-style-type: none;
  }

  li {
    display: inline;
    margin: 2px 10px 2px 10px;
  }

  p {display: block;
    margin-top: 12px;
    margin-bottom: 18px;
    text-align: center;
    font-size: 11px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 12px;
  color: #68abe6;
`;