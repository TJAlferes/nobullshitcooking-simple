import React from 'react';

import '../cuisine.css';

const Indian = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Indian</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/indian/nobsc-indian-thumb.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/indian/nobsc-indian-banner.png" />
  </div>
);

export default Indian;