import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Styles = styled.aside`
  order: 1;
  flex: 1 1 auto;
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px 10px;
  overflow: auto;
  background-color: #fff;
  
  span, #right_aside span {
    display: block;
    margin-bottom: 5px;
  }
  span:hover {
    background-color: #ddd;
    cursor: pointer;
    cursor: hand;
  }
  hr {
    height: 1px;
    border: 0 none;
    margin-bottom: 5px;
    background-color: #bfbfbf;
  }
`;

export const LeftNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
`; 