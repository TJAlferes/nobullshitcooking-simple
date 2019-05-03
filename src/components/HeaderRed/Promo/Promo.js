import React from 'react';
import { NavLink } from 'react-router-dom';

import CurrentPromo from '../../../assets/images/header/announcements/announcement-05-03-17.png';

const Promo = () => (
  <NavLink to="/">
    <img src={CurrentPromo} />
  </NavLink>
);

export default Promo;