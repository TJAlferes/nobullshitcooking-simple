import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './footerGray.css';

const FooterGray = props => (
  <div className={`footergray ${props.theme}`}>
    <ul>
      <li><NavLink to="/site/sitemap">Sitemap</NavLink></li>
      <li><NavLink to="/site/disclaimer">Disclaimer</NavLink></li>
      <li><NavLink to="/site/terms">Terms of Use</NavLink></li>
      <li><NavLink to="/site/privacy">Privacy Policy</NavLink></li>
      <li><NavLink to="/site/help">Help</NavLink></li>
    </ul>
    <p>Copyright 2015-2019 NoBullshitCooking. All rights reserved.</p>
  </div>
);

const mapStateToProps = state => ({
  theme: state.theme.footerTheme
});

export default connect(mapStateToProps)(FooterGray);