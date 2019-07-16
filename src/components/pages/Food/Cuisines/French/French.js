import React from 'react';

import '../cuisine.css';

const French = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>French</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/french/nobsc-french-thumb.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/french/nobsc-french-banner.png" />
  </div>
);

export default French;