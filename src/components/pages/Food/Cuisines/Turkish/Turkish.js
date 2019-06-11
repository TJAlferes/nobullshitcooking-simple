import React from 'react';

import '../cuisine.css';
//import TurkishBanner from '../../../../../assets/images/content/cuisines/turkish/nobsc-turkish-banner.png';

const Turkish = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Turkish</h1>
    {/*<img src={TurkishBanner} />*/}
  </div>
);

export default Turkish;