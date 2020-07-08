import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

export function Footer({ theme }: Props): JSX.Element {
  return (
    <footer className={`footergray ${theme}`}>
      <ul>
        <li><Link to="/page/site/sitemap">Sitemap</Link></li>
        <li><Link to="/page/site/disclaimer">Disclaimer</Link></li>
        <li><Link to="/page/site/terms">Terms of Use</Link></li>
        <li><Link to="/page/site/privacy">Privacy Policy</Link></li>
        <li><Link to="/page/site/help">Help</Link></li>
      </ul>
      <p>Copyright 2015-2020 NoBullshitCooking. All rights reserved.</p>
    </footer>
  );
}

type Props = {
  theme: string;
};