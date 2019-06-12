import React from 'react';

import '../cuisine.css';
import ComingSoon from '../../../../../assets/images/content/coming-soon-1000-618.png';
//import ChineseBanner from '../../../../../assets/images/content/cuisines/chinese/nobsc-chinese-banner.png';

const Chinese = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Chinese</h1>
    <img src={ComingSoon} />
    {/*<img src={ChineseBanner} />*/}
  </div>
);

export default Chinese;