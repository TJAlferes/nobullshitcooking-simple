import React from 'react';

import { StyledNavLink } from './Styles';
import LogoLargeWhite from '../../../assets/images/authentication/logo-large-white.png';

const login = props => (
  <div>
    <StyledNavLink to="/"><img src={LogoLargeWhite} /></StyledNavLink>
    <p>Sign In</p>
  </div>
);

export default login;