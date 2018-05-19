import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Field } from 'react-final-form';

import { StyledNavLink, Styles } from './Styles';
import LogoLargeWhite from '../../../assets/images/authentication/logo-large-white.png';

const register = props => (
  <div>
    <StyledNavLink to="/"><img src={LogoLargeWhite} /></StyledNavLink>
    <Styles>
      <form>
        <h1>Create Account</h1>
        <label>Username</label>
        <input type="text" name="username" id="username" size="20" maxLength="20" value="" autoFocus />
        <label>Email</label>
        <input type="text" name="email" id="email" size="20" maxLength="50" value="" />
        <label>Password</label>
        <input type="text" name="password" id="password" size="20" maxLength="20" value="" />
        <input type="submit" name="submit" id="create_account_button" value="Create Account" />
      </form>
      <ul>
        <li><NavLink to="/">Terms of Use</NavLink></li>
        <li><NavLink to="/">Privacy Policy</NavLink></li>
        <li><NavLink to="/">Help</NavLink></li>
      </ul>
      <p>Copyright 2015-2017 NoBullshitCooking. All Rights Reserved.</p>
    </Styles>
  </div>
);

export default register;