import React from 'react';

import '../cuisine.css';
import IrishBanner from '../../../../../assets/images/content/cuisines/irish/nobsc-irish-banner.png';

const Irish = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Irish</h1>
    <img src={IrishBanner} />
  </div>
);

export default Irish;