import React from 'react';
import { Link } from 'react-router-dom';

import './principles.css';

const ComingSoon = 'https://nobsc-images-01.s3.amazonaws.com/content/misc/coming-soon-120-120.png';

const Principles = props => (
  <div className={`principles one-column-a ${props.oneColumnATheme}`}>
    <h1>Principles</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/fitness/principles/composition">
          <span className="nav-grid-a-item-text">Composition</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/principles/balance">
          <span className="nav-grid-a-item-text">Balance</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/principles/strength">
          <span className="nav-grid-a-item-text">Strength</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/principles/speed">
          <span className="nav-grid-a-item-text">Speed</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/principles/agility">
          <span className="nav-grid-a-item-text">Agility</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/principles/endurance">
          <span className="nav-grid-a-item-text">Endurance</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/fitness/principles/flexibility">
          <span className="nav-grid-a-item-text">Flexibility</span>
          <img className="nav-grid-a-item-image" src={ComingSoon} />
        </Link>
      </div>
    </div>
  </div>
);

export default Principles;