import React from 'react';

import '../cuisine.css';

const Turkish = props => (
  <div className={`cuisine one-column-a ${props.oneColumnATheme}`}>
    <h1>Turkish</h1>
    <img src="https://s3.amazonaws.com/nobsc-images-01/content/misc/coming-soon-1000-618.png" />
    {/*<img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/turkish/nobsc-turkish-thumb.png" />*/}
    {/*<img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/food/cuisines/turkish/nobsc-turkish-banner.png" />*/}
  </div>
);

export default Turkish;