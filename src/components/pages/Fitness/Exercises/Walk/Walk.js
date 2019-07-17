import React from 'react';

import '../exercise.css'

const Walk = props => (
  <div className={`exercise one-column-a ${props.oneColumnATheme}`}>
    <h1>Walk</h1>
    <img className="mobile_display" src="https://s3.amazonaws.com/nobsc-images-01/content/fitness/exercises/walk/walk-120-120.png" />
    <img className="desktop_display" src="https://s3.amazonaws.com/nobsc-images-01/content/fitness/exercises/walk/walk-1000-618.png" />
    <span>Source: Aaron Tait</span>
  </div>
);

export default Walk;