import React from 'react';
import { Link } from 'react-router-dom';

import './methods.css';
import Grill from '../../../../assets/images/content/grill.png';

const Methods = props => (
  <div className={`methods one-column-a ${props.oneColumnATheme}`}>
    <h1>Methods</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/poach-and-simmer">
          <span className="nav-grid-a-item-text">Poach and Simmer</span>
          <img className="nav-grid-a-item-image" src={Grill} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/steam">
          <span className="nav-grid-a-item-text">Steam</span>
          <img className="nav-grid-a-item-image" src={Grill} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/saute">
          <span className="nav-grid-a-item-text">Saute</span>
          <img className="nav-grid-a-item-image" src={Grill} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/roast">
          <span className="nav-grid-a-item-text">Roast</span>
          <img className="nav-grid-a-item-image" src={Grill} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/grill">
          <span className="nav-grid-a-item-text">Grill</span>
          <img className="nav-grid-a-item-image" src={Grill} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/methods/stew-and-braise">
          <span className="nav-grid-a-item-text">Stew and Braise</span>
          <img className="nav-grid-a-item-image" src={Grill} />
        </Link>
      </div>
    </div>
  </div>
);

export default Methods;