import React from 'react';
import { Link } from 'react-router-dom';

import './siteNavEquipment.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/misc/';

function navItem(path: string, title: string, image: string) {
  return (
    <div className="nav-grid-a-item">
      <Link to={`${path}`}>
        <span className="nav-grid-a-item-text">{title}</span>
        <img
          className="nav-grid-a-item-image"
          src={`${s3Path}${image}.png`}
        />
      </Link>
    </div>
  );
}

export function SiteNavEquipment({
  oneColumnATheme,
  navGridATheme
}: Props): JSX.Element { 
  return (
    <div className={`site-nav-equipment one-column-a ${oneColumnATheme}`}>
      <h1>Equipment</h1>
      <div className={`nav-grid-a ${navGridATheme}`}>
        {navItem("/food/equipment/cleaning", "Cleaning", "coming-soon-120-120")}
        {navItem("/food/equipment/preparing", "Preparing", "coming-soon-120-120")}
        {navItem("/food/equipment/cooking", "Cooking", "coming-soon-120-120")}
        {navItem("/food/equipment/dining", "Dining", "coming-soon-120-120")}
        {navItem("/food/equipment/storage", "Storage", "coming-soon-120-120")}
      </div>
    </div>
  );
}

interface Props {
  oneColumnATheme: string
  navGridATheme: string
}