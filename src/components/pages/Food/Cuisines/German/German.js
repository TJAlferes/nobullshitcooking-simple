import React from 'react';

import '../cuisine.css';
import GermanBanner from '../../../../../assets/images/content/cuisines/german/nobsc-german-banner.png';

const German = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>German</h1>
    <img src={GermanBanner} />
  </div>
);

export default German;