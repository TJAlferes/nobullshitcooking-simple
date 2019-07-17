import React from 'react';

import '../cuisine.css';

const Chinese = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Chinese</h1>
    <img src="https://s3.amazonaws.com/nobsc-images-01/content/misc/coming-soon-1000-618.png" />
    {/*<img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/chinese/nobsc-chinese-thumb.png" />*/}
    {/*<img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/chinese/nobsc-chinese-banner.png" />*/}
  </div>
);

export default Chinese;