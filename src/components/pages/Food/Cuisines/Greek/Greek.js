import React from 'react';

import '../cuisine.css';
import GreekBanner from '../../../../../assets/images/content/cuisines/greek/nobsc-greek-banner.png';

const Greek = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Greek</h1>
    <img src={GreekBanner} />
  </div>
);

export default Greek;