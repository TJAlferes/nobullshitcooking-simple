import React from 'react';

import '../cuisine.css';

const Greek = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Greek</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/greek/nobsc-greek-thumb.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/greek/nobsc-greek-banner.png" />
  </div>
);

export default Greek;