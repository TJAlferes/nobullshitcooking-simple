import React from 'react';
import { Link } from 'react-router-dom';

import './nutrition.css';

const Nutrition = () => (
  <div className="nutrition">
    <h1>Nutrition</h1>
    <Link to="/food/nutrition/calories">Calories</Link>
    <Link to="/food/nutrition/macronutrients">Macronutrients</Link>
    <Link to="/food/nutrition/micronutrients">Micronutrients</Link>
    <Link to="/food/nutrition/supplements">Supplements</Link>
  </div>
);

export default Nutrition;