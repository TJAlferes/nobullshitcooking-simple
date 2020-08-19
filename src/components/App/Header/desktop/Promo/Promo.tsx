import React from 'react';
import { Link } from 'react-router-dom';

import './promo.css';

const url = "https://s3.amazonaws.com/nobsc-images-01/header/announcements/";

export function Promo(): JSX.Element {
  return (
    <Link className="promo" to="/">
      <img className="promo-link--large" src={`${url}announcement-05-03-17-240w.png`} />
      <img className="promo-link--small" src={`${url}announcement-05-03-17-180w.png`} />
    </Link>
  );
}