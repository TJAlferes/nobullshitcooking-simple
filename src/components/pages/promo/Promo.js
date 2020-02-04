import React from 'react';
import { Link } from 'react-router-dom';

import './promo.css';

//const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/promo/';

const navItem = (path, title, /*image*/) => (
  <div className="nav-grid-a-item">
    <Link to={`${path}`}>
      <span className="nav-grid-a-item-text">{title}</span>
      {/*<img
        className="nav-grid-a-item-image"
        src={`${s3Path}${image}.png`}
      />*/}
    </Link>
  </div>
);

const Promo = ({ oneColumnATheme, navGridATheme }) => (
  <div className={`promo one-column-a ${oneColumnATheme}`}>
    <h1>Promo</h1>
    <div className={`nav-grid-a ${navGridATheme}`}>
      {navItem("/promo/water-filtration", "Water Filtration")}
      {navItem("/promo/tea", "Tea")}
      {navItem("/promo/coffee", "Cofffee")}
      {navItem("/promo/outdoors", "Outdoors")}
      {navItem("/promo/garden", "Garden")}
      {navItem("/promo/tools", "Tools")}
    </div>
  </div>
);

export default Promo;