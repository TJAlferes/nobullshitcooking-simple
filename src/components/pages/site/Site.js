import React from 'react';
import { Link } from 'react-router-dom';

const Site = props => (
  <div className={`cuisines one-column-a ${props.oneColumnATheme}`}>
    <h1>Site</h1>
    <div className={`nav-grid-a ${props.navGridATheme}`}>
      <div className="nav-grid-a-item">
        <Link to="/site/welcome">
          <span className="nav-grid-a-item-text">Welcome</span>
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/site/help">
          <span className="nav-grid-a-item-text">Help</span>
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/site/sitemap">
          <span className="nav-grid-a-item-text">Sitemap</span>
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/site/privacy">
          <span className="nav-grid-a-item-text">Privacy Policy</span>
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/site/terms">
          <span className="nav-grid-a-item-text">Terms of Use</span>
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/site/disclaimer">
          <span className="nav-grid-a-item-text">Disclaimer</span>
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/site/contests">
          <span className="nav-grid-a-item-text">Contests</span>
        </Link>
      </div>
      <div className="nav-grid-a-item">
        <Link to="/site/charity">
          <span className="nav-grid-a-item-text">Charity</span>
        </Link>
      </div>
    </div>
  </div>
);

export default Site;