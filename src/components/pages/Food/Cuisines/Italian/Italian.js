import React from 'react';

import '../cuisine.css';

const Italian = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Italian</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/italian/nobsc-italian-thumb.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/italian/nobsc-italian-banner.png" />
  </div>
);

export default Italian;