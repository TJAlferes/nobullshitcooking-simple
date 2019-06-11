import React from 'react';

import '../cuisine.css';
import ItalianBanner from '../../../../../assets/images/content/cuisines/italian/nobsc-italian-banner.png';

const Italian = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Italian</h1>
    <img src={ItalianBanner} />
  </div>
);

export default Italian;