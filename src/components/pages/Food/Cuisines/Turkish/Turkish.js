import React from 'react';

import '../cuisine.css';
import ComingSoon from '../../../../../assets/images/content/coming-soon-1000-618.png';
//import TurkishBanner from '../../../../../assets/images/content/cuisines/turkish/nobsc-turkish-banner.png';

const Turkish = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Turkish</h1>
    <img src={ComingSoon} />
    {/*<img src={TurkishBanner} />*/}
  </div>
);

export default Turkish;