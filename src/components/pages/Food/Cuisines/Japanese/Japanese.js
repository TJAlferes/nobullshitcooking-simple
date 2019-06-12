import React from 'react';

import '../cuisine.css';
import ComingSoon from '../../../../../assets/images/content/coming-soon-1000-618.png';
//import JapaneseBanner from '../../../../../assets/images/content/cuisines/japanese/nobsc-japanese-banner.png';

const Japanese = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Japanese</h1>
    <img src={ComingSoon} />
    {/*<img src={JapaneseBanner} />*/}
  </div>
);

export default Japanese;