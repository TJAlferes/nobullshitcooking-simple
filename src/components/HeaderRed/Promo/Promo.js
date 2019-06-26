import React from 'react';
import { Link } from 'react-router-dom';

import './promo.css';
import DesktopCurrentPromo from '../../../assets/images/header/announcements/announcement-05-03-17-240w.png';
import TabletCurrentPromo from '../../../assets/images/header/announcements/announcement-05-03-17-180w.png';

const Promo = () => (
  <Link className="promo" to="/">
    <img className="promo-img-desktop" src={DesktopCurrentPromo} />
    <img className="promo-img-tablet" src={TabletCurrentPromo} />
  </Link>
);

export default Promo;