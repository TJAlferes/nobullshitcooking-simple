import React from 'react';

import './privacyPolicy.css';

const PrivacyPolicy = ({ oneColumnATheme }) => (
  <div className={`privacy-policy one-column-a ${oneColumnATheme}`}>
    <h1 className="privacy-policy__heading">Privacy Policy</h1>
    <p className="privacy-policy__text">See also: Data Policy</p>
  </div>
);

export default PrivacyPolicy;