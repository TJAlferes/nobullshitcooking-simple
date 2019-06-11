import React from 'react';

import '../cuisine.css';
//import ChineseBanner from '../../../../../assets/images/content/cuisines/chinese/nobsc-chinese-banner.png';

const Chinese = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Chinese</h1>
    {/*<img src={ChineseBanner} />*/}
  </div>
);

export default Chinese;