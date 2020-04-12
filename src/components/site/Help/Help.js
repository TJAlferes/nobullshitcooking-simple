import React from 'react';

import './help.css';

const Help = ({ oneColumnATheme }) => (
  <div className={`help one-column-a ${oneColumnATheme}`}>
    <h1 className="help__heading">Help</h1>
    <p className="help__text">You really do need help.</p>
  </div>
);

export default Help;