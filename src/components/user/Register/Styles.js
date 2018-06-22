import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: block;
  margin: 0 auto;
  max-width: content;
  img {
    display: block;
    margin: 0 auto;
  }
`;

export const Styles = styled.div`
  font-family: 'Play', sans-serif;
  font-size: 13px;
  form {
    display: block;
    width: 320px;
    margin: 20px auto 20px auto;
    border-width: 1px;
    border-color: #ddd;
    border-style: solid;
    border-radius: 4px;
    padding: 14px 18px;
  }
  h1 {
    display: block;
    margin-bottom: 14px;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2;
  }
  label {
    display: block;
    margin: 14px auto 4px auto;
    font-size: 13px;
    font-weight: 700;
  }
  input {
    display: block;
    width: 100%;
    height: 31px;
    margin: 0 auto 0 auto;
    border-style: solid;
    border-width: 1px;
    border-radius: 2px;
    border-color: #aaa;
    padding: 3px 7px 3px 7px;
  }
  /*input:focus {background-color: #fdfdd5;}*/

  a:link {color: #68abe6;}
  a:visited {color: #68abe6;}
  a:hover {
    color: #c10006;
    text-decoration: underline;
  }
  a:active {
    color: #c10006;
    text-decoration: underline;
  }

  #footer {
    display: block;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #bfbfbf;
    padding-top: 18px;
  }
  p {
    margin-top: 12px;
    margin-bottom: 18px;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 11px;
  }
  ul {
    display: table;
    margin: 18px auto 0 auto;
    list-style-type: none;
    overflow: hidden;
    text-align: centered;
  }
  li {
    display: inline;
    margin-top: 2px;
    margin-right: 6px;
    margin-bottom: 2px;
    margin-left: 6px;
  }
  #footer a {
    text-decoration: none;
    font-family: Arial, sans-serif;
    font-size: 12px;
  }

  #centered_logo {
    display: block;
    margin-top: 10px;
    margin-right:	auto;
    margin-bottom: 0;
    margin-left: auto;
    width: 900px;
    height: 100px;
  }

  #create_account_button {
    width: 100%;
    height: 31px;
    margin: 18px auto 24px auto;
    border-style: solid;
    border-width: 1px;
    border-radius: 2px;
    border-top-color: #999;
    border-right-color: #777;
    border-bottom-color: #555;
    border-left-color: #777;
    padding-top: 1px;
    font-family: 'Play', sans-serif;
    font-size: 14px;
    color: black;
    background-image: linear-gradient(to bottom, #b8dbfb, #68abe6);
    cursor: pointer;
    cursor: hand;
  }
  #create_account_button:hover {background-image: linear-gradient(to bottom, #8cbeec, #4493d8);}
  #create_account_button:active {background-image: linear-gradient(to bottom, #8cbeec, #4493d8);}
`;