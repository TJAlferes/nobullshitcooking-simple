import React from 'react';

import '../cuisine.css';
import FrenchBanner from '../../../../../assets/images/content/cuisines/french/nobsc-french-banner.png';

const French = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>French</h1>
    <img src={FrenchBanner} />
  </div>
);

export default French;