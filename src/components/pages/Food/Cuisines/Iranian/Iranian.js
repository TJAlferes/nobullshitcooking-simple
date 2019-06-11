import React from 'react';

import '../cuisine.css';
import IranianBanner from '../../../../../assets/images/content/cuisines/iranian/nobsc-iranian-banner.png';

const Iranian = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Iranian</h1>
    <img src={IranianBanner} />
  </div>
);

export default Iranian;