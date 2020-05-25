import React from 'react';
import { Link } from 'react-router-dom';

import './principles.css';

const s3Path = 'https://s3.amazonaws.com/nobsc-images-01/content/misc/';

const navItem = (path, title, image) => (
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

const Principles = ({ oneColumnATheme, navGridATheme }) => (
  <div className={`principles one-column-a ${oneColumnATheme}`}>
    <h1>Principles</h1>
    <div className={`nav-grid-a ${navGridATheme}`}>
      {navItem("/fitness/principles/composition", "Composition", "coming-soon-120-120")}
      {navItem("/fitness/principles/balance", "Balance", "coming-soon-120-120")}
      {navItem("/fitness/principles/strength", "Strength", "coming-soon-120-120")}
      {navItem("/fitness/principles/speed", "Speed", "coming-soon-120-120")}
      {navItem("/fitness/principles/agility", "Agility", "coming-soon-120-120")}
      {navItem("/fitness/principles/endurance", "Endurance", "coming-soon-120-120")}
      {navItem("/fitness/principles/flexibility", "Flexibility", "coming-soon-120-120")}
    </div>
  </div>
);

export default Principles;