import React from 'react';

import '../nutrition.css';
import './macronutrients.css';

const Macronutrients = props => (
  <div className={`nutrition macronutrients one-column-a ${props.oneColumnATheme}`}>
    <h1>Macronutrients</h1>
    <p>Protein: 15-20%</p>
    <p>Carbohydrate: 30-55%</p>
    <p>Fat: 30-55%</p>
    <p>TABLE</p>
    <p>FACTS</p>
  </div>
);

export default Macronutrients;