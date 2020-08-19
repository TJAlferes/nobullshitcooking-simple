import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

export function Footer({ theme }: Props): JSX.Element {
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer__links">
        <Link className="footer__link" to="/page/site/sitemap">
          Sitemap
        </Link>
        <Link className="footer__link" to="/page/site/disclaimer">
          Disclaimer
        </Link>
        <Link className="footer__link" to="/page/site/terms">
          Terms of Use
        </Link>
        <Link className="footer__link" to="/page/site/privacy">
          Privacy Policy
        </Link>
        <Link className="footer__link" to="/page/site/help">
          Help
        </Link>
      </div>

      <p className="footer__copyright">
        Copyright 2015-2020 NoBullshitCooking. All rights reserved.
      </p>
    </footer>
  );
}

type Props = {
  theme: string;
};