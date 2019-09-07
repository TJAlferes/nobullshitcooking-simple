import React from 'react';
import { Link } from 'react-router-dom';

import './mobileSiteNav.css';

const MobileSiteNav = () => {
  return (
    <div className="mobile-site-nav">
      <li>
        <Link className="mobile-site-nav-link mobile_text" to="/food">
          Food
        </Link>
      </li>
      <li>
        <Link className="mobile-site-nav-link mobile_text" to="/fitness">
          Fitness
        </Link>
      </li>
      {/*<li>
        <Link className="mobile-site-nav-link mobile_text" to="/store/storefront">
          Supply
        </Link>
      </li>*/}
    </div>
  );
}

export default MobileSiteNav;