import React from 'react';

import './charity.css';

const Charity = ({ oneColumnATheme }) => (
  <div className={`charity one-column-a ${oneColumnATheme}`}>
    <h1 className="charity__heading">Charity</h1>
    <p className="charity__text">Causal flows.</p>
  </div>
);

export default Charity;