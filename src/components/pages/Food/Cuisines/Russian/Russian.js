import React from 'react';

import '../cuisine.css';
import RussianBanner from '../../../../../assets/images/content/cuisines/russian/nobsc-russian-banner.png';

const Russian = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Russian</h1>
    <img src={RussianBanner} />
  </div>
);

export default Russian;