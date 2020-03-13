import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Link } from 'react-router-dom';

import './footerGray.css';

export default function FooterGray({
  theme
}: InferProps<typeof FooterGray.propTypes>): JSX.Element {
  return (
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
};

FooterGray.propTypes = {theme: PropTypes.string.isRequired};