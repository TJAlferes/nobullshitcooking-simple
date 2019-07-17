import React from 'react';

import '../cuisine.css';

const German = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>German</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/german/nobsc-german-thumb.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/german/nobsc-german-banner.png" />
  </div>
);

export default German;