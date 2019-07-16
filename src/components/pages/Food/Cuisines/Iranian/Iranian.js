import React from 'react';

import '../cuisine.css';

const Iranian = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Iranian</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/iranian/nobsc-iranian-thumb.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/iranian/nobsc-iranian-banner.png" />
  </div>
);

export default Iranian;