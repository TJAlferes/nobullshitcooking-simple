import React from 'react';

import '../cuisine.css';

const Irish = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Irish</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/irish/nobsc-irish-thumb.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/irish/nobsc-irish-banner.png" />
  </div>
);

export default Irish;