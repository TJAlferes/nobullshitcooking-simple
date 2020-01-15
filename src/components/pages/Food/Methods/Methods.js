import React from 'react';
import { Link } from 'react-router-dom';

import './methods.css';

const ComingSoon = "https://s3.amazonaws.com/nobsc-images-01/content/misc/coming-soon-120-120.png";

const Methods = ({ oneColumnATheme, navGridATheme }) => (
  <div className={`methods one-column-a ${oneColumnATheme}`}>
    <h1>Methods</h1>
    <div className={`nav-grid-a ${navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/chill-and-freeze">
          <span className="nav-grid-a-item-text">Chill and Freeze</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/steam-poach-simmer-boil-and-blanch">
          <span className="nav-grid-a-item-text">Steam, Poach, Simmer, Boil, and Blanch</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/stew-and-braise">
          <span className="nav-grid-a-item-text">Stew and Braise</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/saute-fry-and-glaze">
          <span className="nav-grid-a-item-text">Saute, Fry, and Glaze</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/bake-roast-toast-and-broil">
          <span className="nav-grid-a-item-text">Bake, Roast, Toast, and Broil</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/bbq-grill-and-smoke">
          <span className="nav-grid-a-item-text">BBQ, Grill, and Smoke</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
    </div>
  </div>
);

export default Methods;