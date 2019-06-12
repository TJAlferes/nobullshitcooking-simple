import React from 'react';

import '../nutrition.css';
import './calories.css';

const Calories = props => (
  <div className={`nutrition calories one-column-a ${props.oneColumnATheme}`}>
    <h1>Calories</h1>
    <p>CALCULATOR</p>
    <p>FACTS</p>
  </div>
);

export default Calories;