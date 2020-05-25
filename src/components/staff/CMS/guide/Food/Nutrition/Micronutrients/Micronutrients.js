import React from 'react';

import '../nutrition.css';
import './micronutrients.css';

const Micronutrients = props => (
  <div className={`nutrition micronutrients one-column-a ${props.oneColumnATheme}`}>
    <h1>Micronutrients</h1>
    <p>TABLE</p>
    <p>FACTS</p>
  </div>
);

export default Micronutrients;