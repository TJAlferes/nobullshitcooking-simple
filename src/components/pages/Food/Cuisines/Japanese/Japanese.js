import React from 'react';

import '../cuisine.css';
import ComingSoon from '../../../../../assets/images/content/coming-soon-1000-618.png';

const Japanese = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Japanese</h1>
    <img src={ComingSoon} />
    {/*<img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/japanese/nobsc-japanese-thumb.png" />*/}
    {/*<img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/cuisines/japanese/nobsc-japanese-banner.png" />*/}
  </div>
);

export default Japanese;