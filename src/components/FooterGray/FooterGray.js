import React from 'react';
import { Link } from 'react-router-dom';

import './footerGray.css';

const FooterGray = ({ theme }) => (
  <footer className={`footergray ${theme}`}>
    <ul>
      <li><Link to="/site/sitemap">Sitemap</Link></li>
      <li><Link to="/site/disclaimer">Disclaimer</Link></li>
      <li><Link to="/site/terms">Terms of Use</Link></li>
      <li><Link to="/site/privacy">Privacy Policy</Link></li>
      <li><Link to="/site/help">Help</Link></li>
    </ul>
    <p>Copyright 2015-2020 NoBullshitCooking. All rights reserved.</p>
  </footer>
);

export default FooterGray;