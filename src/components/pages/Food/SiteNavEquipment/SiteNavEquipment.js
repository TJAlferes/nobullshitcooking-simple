import React from 'react';
import { Link } from 'react-router-dom';

import './siteNavEquipment.css';
import ComingSoon from '../../../../assets/images/content/coming-soon-120-120.png';

const SiteNavEquipment = props => (
  <div className={`site-nav-equipment one-column-a ${props.oneColumnATheme}`}>
    <h1>Equipment</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/food/equipment/cleaning">
          <span className="nav-grid-a-item-text">Cleaning</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/equipment/preparing">
          <span className="nav-grid-a-item-text">Preparing</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/equipment/cooking">
          <span className="nav-grid-a-item-text">Cooking</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/equipment/dining">
          <span className="nav-grid-a-item-text">Dining</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/food/equipment/storage">
          <span className="nav-grid-a-item-text">Storage</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
    </div>
  </div>
);

export default SiteNavEquipment;