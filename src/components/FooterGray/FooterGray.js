import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './footerGray.css';

const FooterGray = props => (
  <footer className={`footergray ${props.theme}`}>
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

const mapStateToProps = state => ({theme: state.theme.footerTheme});

export default connect(mapStateToProps)(FooterGray);