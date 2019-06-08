import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './footerGray.css';

const footerGray = props => (
  <div className={`footer_gray ${props.theme}`}>
    <ul>
      <li><NavLink to="/sitemap">Sitemap</NavLink></li>
      <li><NavLink to="/disclaimer">Disclaimer</NavLink></li>
      <li><NavLink to="/terms">Terms of Use</NavLink></li>
      <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
      <li><NavLink to="/help">Help</NavLink></li>
    </ul>
    <p>Copyright 2015-2019 NoBullshitCooking. All rights reserved.</p>
  </div>
);

const mapStateToProps = state => ({
  theme: state.theme.footerTheme
});

export default connect(mapStateToProps)(footerGray);