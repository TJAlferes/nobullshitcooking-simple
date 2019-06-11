import React from 'react';

import '../cuisine.css';
import MexicanBanner from '../../../../../assets/images/content/cuisines/mexican/nobsc-mexican-banner.png';

const Mexican = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Mexican</h1>
    <img src={MexicanBanner} />
  </div>
);

export default Mexican;