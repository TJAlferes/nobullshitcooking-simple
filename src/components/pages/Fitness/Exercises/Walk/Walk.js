import React from 'react';

import '../exercise.css'
import WalkImage from '../../../../../assets/images/content/exercises/walk-1000-618.png'

const Walk = props => (
  <div className={`exercise one-column-a ${props.oneColumnATheme}`}>
    <h1>Walk</h1>
    <img src={WalkImage} />
    <span>Source: Aaron Tait</span>
  </div>
);

export default Walk;