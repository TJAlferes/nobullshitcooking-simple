import React from 'react';
import { Link } from 'react-router-dom';

import './promo.css';

export function Promo(): JSX.Element {
  return (
    <Link className="promo" to="/">
      <img className="promo-img-desktop" src="https://s3.amazonaws.com/nobsc-images-01/header/announcements/announcement-05-03-17-240w.png" />
      <img className="promo-img-tablet" src="https://s3.amazonaws.com/nobsc-images-01/header/announcements/announcement-05-03-17-180w.png" />
    </Link>
  );
}