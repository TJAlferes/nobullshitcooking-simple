import React from 'react';

import '../cuisine.css';
import IndianBanner from '../../../../../assets/images/content/cuisines/indian/nobsc-indian-banner.png';

const Indian = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Indian</h1>
    <img src={IndianBanner} />
  </div>
);

export default Indian;