import React from 'react';

import '../cuisine.css';

const Mexican = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Mexican</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/mexican/nobsc-mexican-thumb.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/mexican/nobsc-mexican-banner.png" />
  </div>
);

export default Mexican;