import React from 'react';

import '../cuisine.css';

const Russian = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Russian</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/russian/nobsc-russian-thumb.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/russian/nobsc-russian-banner.png" />
  </div>
);

export default Russian;