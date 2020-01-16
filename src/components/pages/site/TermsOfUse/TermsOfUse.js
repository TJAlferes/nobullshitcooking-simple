import React from 'react';

import './termsOfUse.css';

const TermsOfUse = ({ oneColumnATheme }) => (
  <div className={`terms-of-use one-column-a ${oneColumnATheme}`}>
    <h1 className="terms-of-use__heading">Terms Of Use</h1>
    <p className="terms-of-use__text">No bullshit.</p>
  </div>
);

export default TermsOfUse;